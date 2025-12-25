---
title: ALB vs NLB for Istio - Avoiding the Double L7 Trap
description: Understanding L4 vs L7 Load Balancing in a Service Mesh
image: https://www.wedaa.tech/docs/img/blog/ALBvsNLBIstio/ALBvsNLB_network_analogy.png
tags:
  - istio
  - service-mesh
  - kubernetes
  - eks
  - aws
  - nlb
  - alb
  - load-balancer
  - l4-vs-l7
  - cloud-architecture
  - platform-engineering
  - microservices

date: 2025-12-25
---
## Introduction

When running **Istio** on Kubernetes (especially on **AWS EKS**), a common question is:

> Should I put an **Application Load Balancer (ALB)** or a **Network Load Balancer (NLB)** in front of Istio?

![Istio on Kubernetes with load balancers](/img/blog/ALBvsNLBIstio/Istio_on_k8s_with_elb.png)

At first glance, both seem to work. Traffic reaches the cluster and the application responds.  
But once you understand **Layer 4 vs Layer 7** and how a **service mesh** is designed, the right choice becomes clear.

This post explains **why NLB fits Istio better than ALB** and how using ALB can lead to a **double L7 anti-pattern**.

---

## L4 vs L7 (Only What Matters)

### Layer 4 (Transport Layer)
Layer 4 is about **connections**, not requests.

It understands:
- TCP / UDP
- IP addresses and ports

It does *not* understand:
- HTTP paths
- Headers
- Hostnames

Example:
```
Connect to 10.0.1.5:443
```

➡️ **AWS NLB works at Layer 4**

---

### Layer 7 (Application Layer)
Layer 7 understands **what the request means**.

It understands:
- HTTP / HTTPS / gRPC
- Paths like `/api/orders`
- Hosts like `app.example.com`
- Headers, retries, timeouts

Example:
```
GET /api/orders
```

➡️ **Istio (Envoy) works at Layer 7**  
➡️ **AWS ALB also works at Layer 7**

---

## What Istio Expects

Istio is a **service mesh**, not just a proxy.

It controls:
- Routing
- Traffic splitting
- Retries and timeouts
- mTLS and security policies
- Observability

All of this requires **Layer 7 context**.

So the key idea is:

> **Istio expects to be the single Layer 7 decision-maker.**

---

## ALB + Istio: The Double L7 Trap

```
Client
   ↓
ALB (L7)
   ↓
Istio Envoy (L7)
   ↓
Application
```


Here’s the problem:
- ALB inspects and routes HTTP
- Istio inspects and routes HTTP again
- Routing logic is split across two systems
- Health checks often conflict
- TLS is usually terminated before Istio

This creates unnecessary complexity and confusion.

---

## NLB + Istio: Clean Separation

```
Client
   ↓
NLB (L4)
   ↓
Istio Envoy (L7)
   ↓
Application
```

With this setup:
- NLB only forwards TCP traffic
- Istio handles all HTTP logic
- No overlapping responsibilities
- Cleaner security and observability
- Fewer edge-case failures

This is the **service-mesh-native design**.

![ALB vs NLB with Istio — Avoiding the Double L7 Trap](/img/blog/ALBvsNLBIstio/ALBvsNLB.png)

*Left: ALB + Istio introduces two Layer-7 decision points (the Double L7 Trap).  
Right: NLB forwards at Layer-4 while Istio remains the single Layer-7 authority.*

---

## Simple Analogy

![ALB vs NLB network analogy](/img/blog/ALBvsNLBIstio/ALBvsNLB_network_analogy.png)

**ALB + Istio**  
> Two traffic cops trying to control the same intersection.

**NLB + Istio**  
> One tunnel (NLB) and one traffic cop (Istio).

---

## When ALB Can Still Make Sense

ALB is fine if:
- You are not using Istio for ingress routing
- You want AWS-managed L7 routing at the edge
- Istio is used only for internal service-to-service traffic

But if Istio manages ingress traffic, ALB becomes redundant.

---

## Final Recommendation

For Istio on EKS:

- ✅ Use **NLB (Layer 4)**
- ✅ Let **Istio control Layer 7**
- ❌ Avoid **ALB + Istio ingress**

---

## Key Takeaway

> **A service mesh needs one Layer 7 brain.**  
> **Everything before it should stay simple and dumb.**

That’s why **NLB works best with Istio**.




