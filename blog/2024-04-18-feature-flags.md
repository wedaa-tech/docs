---
title: Unveiling the Power of Feature Flags in Software Development
description: Unveiling the Power of Feature Flags in Software Development
image: https://www.wedaa.tech/docs/img/blog/feature-flags/banner.jpg
tags: [featureflags, architecture, bestpractices, flagsmith, go]
date: 2024-04-18
---
## Introduction

In the realm of software development, there is often a need for implementing features dynamically, toggling functionalities, and rolling out changes seamlessly without disrupting user experience. Imagine this scenario: you're working on a high-stakes project, and you need to introduce a new feature. However, releasing it to all users at once might be risky. What if there are bugs? What if users don't like it? This is where feature flags come to the rescue.

### The Tale of Dynamic Feature Rollouts

Let's delve into a hypothetical scenario. Meet Adam, a software engineer working on a cutting-edge e-commerce platform. Their team is gearing up to introduce a new payment gateway, which promises to enhance user experience and reduces failure rates. However, they're wary of unforeseen bugs that might surface during the rollout. Plus, they're unsure if the new checkout flow will resonate well with all users.

Here's where feature flags come into play. By leveraging feature flags, Adam and their team can deploy the new payment gateway to a small subset of users initially. They can monitor its performance, gather feedback, and make necessary tweaks without affecting the entire user base. Once they're confident in the feature's stability and user acceptance, they can gradually roll it out to all users, mitigating risks and ensuring a smooth transition.

### Understanding Feature Flags

Feature flags, also known as feature toggles or feature switches, are a powerful technique used in software development to enable or disable certain features at runtime. They provide developers with fine-grained control over feature rollout, allowing them to manage feature releases, perform A/B testing, and mitigate risks associated with deploying new functionalities.

## Hands-on

In this blog, we'll explore how to implement feature flags using the Flagsmith in a Go application built on the Go-Micro framework.

### Generate prototype from WeDAA

Use below Architecture as reference and generate code from [WeDAA](https://app.wedaa.tech/canvastocode)

![A Go Micro Service](/img/blog/feature-flags/prototype.png)

### Setup Flagsmith

[Flagsmith](https://www.flagsmith.com) is a feature flag tool that lets you manage features across web, mobile and server side applications.

It provides free account as well for SaaS offering. Signup, Create Organisation and add a feature flag.

![Flagsmith setup](/img/blog/feature-flags/flagsmith.png)

### Flagsmith SDK

Include flagsmith SDK in **go.mod**

```
github.com/Flagsmith/flagsmith-go-client/v3 v3.4.0
```

### Payment Handler

In this snippet, we initialize the Flagsmith client with our API key, retrieve the status of a feature flag, and conditionally execute feature-specific functionality based on the flag's status.

```go
// src/handlers/payments.go
package handler

import (
	"context"
	"net/http"
	flagsmith "github.com/Flagsmith/flagsmith-go-client/v3"
)

type PaymentsHandler struct{}

func (handler *PaymentsHandler) ProcessPayment(response http.ResponseWriter, request *http.Request) {
	client := flagsmith.NewClient("<YOUR_FLAGSMITH_API_KEY>")
	flags, _ := client.GetEnvironmentFlags(context.TODO())
	isEnabled, _ := flags.IsFeatureEnabled("payment_gateway")

	if isEnabled {
		response.Write([]byte(`{ "message": "New Payment Gateway" }`))
	} else {
		response.Write([]byte(`{ "message": "Old Payment Gateway" }`))
	}
}
```

### Payment Controller

A sample controller with API to simulate payments.

```go
// src/controllers/payments.go
package controllers

import (
 "github.com/gorilla/mux"
 "net/http"
 "payments/handlers"
)

var paymentsHandler *handler.PaymentsHandler

type PaymentsController struct {
}

func (paymentsController PaymentsController) RegisterRoutes(r *mux.Router) {
	r.Handle("/api/payments",http.HandlerFunc(paymentsHandler.ProcessPayment)).Methods(http.MethodGet,http.MethodOptions)
}
```

### Register Payments Controller 

Add the following code in registerRoutes function of **main.go** in src

```go
func registerRoutes(router *mux.Router) {
    registerControllerRoutes(controllers.ManagementController{}, router)
    registerControllerRoutes(controllers.PaymentsController{}, router) // Register Payments Controller
}
```

### Execution

1. Run the Go Micro Service using following commands
   
   ```
   go mod tidy
   go run .
   ```

2. Check health of the service
   
   ```
   curl -i -H "Accept: application/json" http://localhost:6060/management/health/readiness
   ```

   Response should be as follows
   ```
   HTTP/1.1 200 OK
   Access-Control-Allow-Headers: Origin, Content-Type, Accept,Authorization
   Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS
   Access-Control-Allow-Origin: *
   Content-Type: application/json
   Date: Wed, 17 Apr 2024 19:30:53 GMT
   Content-Length: 64
   
   {"components":{"readinessState":{"status":"UP"}},"status":"UP"}
   ```

3. Test the new Payment API

   ```
   curl -i -H "Accept: application/json" http://localhost:6060/api/payments
   ```

   Response will be based on feature flag, whether new or old payment gateway is used.
   ```
   HTTP/1.1 200 OK
   Access-Control-Allow-Headers: Origin, Content-Type, Accept,Authorization
   Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS
   Access-Control-Allow-Origin: *
   Content-Type: application/json
   Date: Wed, 17 Apr 2024 19:33:33 GMT
   Content-Length: 36
   
   { "message": "New Payment Gateway" }
   ```

## Conclusion

Feature flags revolutionize the way software is developed and released. They empower developers to iterate quickly, gather feedback, and deliver value to users with confidence. By adopting feature flags in your development workflow, you can mitigate risks, improve deployment agility, and ultimately, delight your users with timely and impactful features.
