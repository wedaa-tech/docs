"use strict";(self.webpackChunkdocusaurus_documentation=self.webpackChunkdocusaurus_documentation||[]).push([[9042],{9669:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var a=n(5893),r=n(1151);const s={title:"Unveiling the Power of Feature Flags in Software Development",description:"Unveiling the Power of Feature Flags in Software Development",image:"https://www.wedaa.tech/docs/img/blog/feature-flags/banner.jpg",tags:["featureflags","architecture","bestpractices","flagsmith","go"],date:new Date("2024-04-18T00:00:00.000Z")},o=void 0,l={permalink:"/docs/blog/2024/04/18/feature-flags",source:"@site/blog/2024-04-18-feature-flags.md",title:"Unveiling the Power of Feature Flags in Software Development",description:"Unveiling the Power of Feature Flags in Software Development",date:"2024-04-18T00:00:00.000Z",formattedDate:"April 18, 2024",tags:[{label:"featureflags",permalink:"/docs/blog/tags/featureflags"},{label:"architecture",permalink:"/docs/blog/tags/architecture"},{label:"bestpractices",permalink:"/docs/blog/tags/bestpractices"},{label:"flagsmith",permalink:"/docs/blog/tags/flagsmith"},{label:"go",permalink:"/docs/blog/tags/go"}],readingTime:3.53,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Unveiling the Power of Feature Flags in Software Development",description:"Unveiling the Power of Feature Flags in Software Development",image:"https://www.wedaa.tech/docs/img/blog/feature-flags/banner.jpg",tags:["featureflags","architecture","bestpractices","flagsmith","go"],date:"2024-04-18T00:00:00.000Z"},unlisted:!1,nextItem:{title:"Microservice architecture using GoMicro",permalink:"/docs/blog/2024/04/17/Go-Micro"}},i={authorsImageUrls:[]},c=[{value:"Introduction",id:"introduction",level:2},{value:"The Tale of Dynamic Feature Rollouts",id:"the-tale-of-dynamic-feature-rollouts",level:3},{value:"Understanding Feature Flags",id:"understanding-feature-flags",level:3},{value:"Hands-on",id:"hands-on",level:2},{value:"Generate prototype from WeDAA",id:"generate-prototype-from-wedaa",level:3},{value:"Setup Flagsmith",id:"setup-flagsmith",level:3},{value:"Flagsmith SDK",id:"flagsmith-sdk",level:3},{value:"Payment Handler",id:"payment-handler",level:3},{value:"Payment Controller",id:"payment-controller",level:3},{value:"Register Payments Controller",id:"register-payments-controller",level:3},{value:"Execution",id:"execution",level:3},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,a.jsx)(t.p,{children:"In the realm of software development, there is often a need for implementing features dynamically, toggling functionalities, and rolling out changes seamlessly without disrupting user experience. Imagine this scenario: you're working on a high-stakes project, and you need to introduce a new feature. However, releasing it to all users at once might be risky. What if there are bugs? What if users don't like it? This is where feature flags come to the rescue."}),"\n",(0,a.jsx)(t.h3,{id:"the-tale-of-dynamic-feature-rollouts",children:"The Tale of Dynamic Feature Rollouts"}),"\n",(0,a.jsx)(t.p,{children:"Let's delve into a hypothetical scenario. Meet Adam, a software engineer working on a cutting-edge e-commerce platform. Their team is gearing up to introduce a new payment gateway, which promises to enhance user experience and reduces failure rates. However, they're wary of unforeseen bugs that might surface during the rollout. Plus, they're unsure if the new checkout flow will resonate well with all users."}),"\n",(0,a.jsx)(t.p,{children:"Here's where feature flags come into play. By leveraging feature flags, Adam and their team can deploy the new payment gateway to a small subset of users initially. They can monitor its performance, gather feedback, and make necessary tweaks without affecting the entire user base. Once they're confident in the feature's stability and user acceptance, they can gradually roll it out to all users, mitigating risks and ensuring a smooth transition."}),"\n",(0,a.jsx)(t.h3,{id:"understanding-feature-flags",children:"Understanding Feature Flags"}),"\n",(0,a.jsx)(t.p,{children:"Feature flags, also known as feature toggles or feature switches, are a powerful technique used in software development to enable or disable certain features at runtime. They provide developers with fine-grained control over feature rollout, allowing them to manage feature releases, perform A/B testing, and mitigate risks associated with deploying new functionalities."}),"\n",(0,a.jsx)(t.h2,{id:"hands-on",children:"Hands-on"}),"\n",(0,a.jsx)(t.p,{children:"In this blog, we'll explore how to implement feature flags using the Flagsmith in a Go application built on the Go-Micro framework."}),"\n",(0,a.jsx)(t.h3,{id:"generate-prototype-from-wedaa",children:"Generate prototype from WeDAA"}),"\n",(0,a.jsxs)(t.p,{children:["Use below Architecture as reference and generate code from ",(0,a.jsx)(t.a,{href:"https://app.wedaa.tech/canvastocode",children:"WeDAA"})]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"A Go Micro Service",src:n(7870).Z+"",width:"2996",height:"1704"})}),"\n",(0,a.jsx)(t.h3,{id:"setup-flagsmith",children:"Setup Flagsmith"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://www.flagsmith.com",children:"Flagsmith"})," is a feature flag tool that lets you manage features across web, mobile and server side applications."]}),"\n",(0,a.jsx)(t.p,{children:"It provides free account as well for SaaS offering. Signup, Create Organisation and add a feature flag."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Flagsmith setup",src:n(5497).Z+"",width:"2968",height:"1486"})}),"\n",(0,a.jsx)(t.h3,{id:"flagsmith-sdk",children:"Flagsmith SDK"}),"\n",(0,a.jsxs)(t.p,{children:["Include flagsmith SDK in ",(0,a.jsx)(t.strong,{children:"go.mod"})]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"github.com/Flagsmith/flagsmith-go-client/v3 v3.4.0\n"})}),"\n",(0,a.jsx)(t.h3,{id:"payment-handler",children:"Payment Handler"}),"\n",(0,a.jsx)(t.p,{children:"In this snippet, we initialize the Flagsmith client with our API key, retrieve the status of a feature flag, and conditionally execute feature-specific functionality based on the flag's status."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-go",children:'// src/handlers/payments.go\npackage handler\n\nimport (\n\t"context"\n\t"net/http"\n\tflagsmith "github.com/Flagsmith/flagsmith-go-client/v3"\n)\n\ntype PaymentsHandler struct{}\n\nfunc (handler *PaymentsHandler) ProcessPayment(response http.ResponseWriter, request *http.Request) {\n\tclient := flagsmith.NewClient("<YOUR_FLAGSMITH_API_KEY>")\n\tflags, _ := client.GetEnvironmentFlags(context.TODO())\n\tisEnabled, _ := flags.IsFeatureEnabled("payment_gateway")\n\n\tif isEnabled {\n\t\tresponse.Write([]byte(`{ "message": "New Payment Gateway" }`))\n\t} else {\n\t\tresponse.Write([]byte(`{ "message": "Old Payment Gateway" }`))\n\t}\n}\n'})}),"\n",(0,a.jsx)(t.h3,{id:"payment-controller",children:"Payment Controller"}),"\n",(0,a.jsx)(t.p,{children:"A sample controller with API to simulate payments."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-go",children:'// src/controllers/payments.go\npackage controllers\n\nimport (\n   "github.com/gorilla/mux"\n   "net/http"\n   "payments/handlers"\n)\n\nvar paymentsHandler *handler.PaymentsHandler\n\ntype PaymentsController struct {}\n\nfunc (paymentsController PaymentsController) RegisterRoutes(r *mux.Router) {\n\tr.Handle("/api/payments",http.HandlerFunc(paymentsHandler.ProcessPayment)).Methods(http.MethodGet,http.MethodOptions)\n}\n'})}),"\n",(0,a.jsx)(t.h3,{id:"register-payments-controller",children:"Register Payments Controller"}),"\n",(0,a.jsxs)(t.p,{children:["Add the following code in registerRoutes function of ",(0,a.jsx)(t.strong,{children:"main.go"})," in src"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-go",children:"func registerRoutes(router *mux.Router) {\n    registerControllerRoutes(controllers.ManagementController{}, router)\n    registerControllerRoutes(controllers.PaymentsController{}, router) // Register Payments Controller\n}\n"})}),"\n",(0,a.jsx)(t.h3,{id:"execution",children:"Execution"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Run the Go Micro Service using following commands"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"go mod tidy\ngo run .\n"})}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Check health of the service"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:'curl -i -H "Accept: application/json" http://localhost:6060/management/health/readiness\n'})}),"\n",(0,a.jsx)(t.p,{children:"Response should be as follows"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:'HTTP/1.1 200 OK\nAccess-Control-Allow-Headers: Origin, Content-Type, Accept,Authorization\nAccess-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS\nAccess-Control-Allow-Origin: *\nContent-Type: application/json\nDate: Wed, 17 Apr 2024 19:30:53 GMT\nContent-Length: 64\n\n{"components":{"readinessState":{"status":"UP"}},"status":"UP"}\n'})}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Test the new Payment API"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:'curl -i -H "Accept: application/json" http://localhost:6060/api/payments\n'})}),"\n",(0,a.jsx)(t.p,{children:"Response will be based on feature flag, whether new or old payment gateway is used."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:'HTTP/1.1 200 OK\nAccess-Control-Allow-Headers: Origin, Content-Type, Accept,Authorization\nAccess-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS\nAccess-Control-Allow-Origin: *\nContent-Type: application/json\nDate: Wed, 17 Apr 2024 19:33:33 GMT\nContent-Length: 36\n\n{ "message": "New Payment Gateway" }\n'})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,a.jsx)(t.p,{children:"Feature flags revolutionize the way software is developed and released. They empower developers to iterate quickly, gather feedback, and deliver value to users with confidence. By adopting feature flags in your development workflow, you can mitigate risks, improve deployment agility, and ultimately, delight your users with timely and impactful features."})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},5497:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/flagsmith-2e961484e02318cd528c48db1873efdd.png"},7870:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/prototype-2838fe90122ecf5f6c8379cd413e7fa8.png"},1151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>o});var a=n(7294);const r={},s=a.createContext(r);function o(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);