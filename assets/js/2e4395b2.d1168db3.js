"use strict";(self.webpackChunkdocusaurus_documentation=self.webpackChunkdocusaurus_documentation||[]).push([[5221],{3267:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var s=i(5893),t=i(1151);const r={title:"Definitive Guide to Knative Serving\u2014A Deep Dive into Theory and Architecture",description:"A Deep Dive into Theory and Architecture of Knative Serving",image:"https://knative.dev/docs/community/images/knative-audience.svg",tags:["microservices","architecture","cloud-native","Serverless","cloud computing","knative","kubernetes","Knative-serving"],date:new Date("2024-05-01T00:00:00.000Z")},o=void 0,a={permalink:"/docs/blog/2024/05/01/knative-serving-01",source:"@site/blog/2024-05-01-knative-serving-01.md",title:"Definitive Guide to Knative Serving\u2014A Deep Dive into Theory and Architecture",description:"A Deep Dive into Theory and Architecture of Knative Serving",date:"2024-05-01T00:00:00.000Z",formattedDate:"May 1, 2024",tags:[{label:"microservices",permalink:"/docs/blog/tags/microservices"},{label:"architecture",permalink:"/docs/blog/tags/architecture"},{label:"cloud-native",permalink:"/docs/blog/tags/cloud-native"},{label:"Serverless",permalink:"/docs/blog/tags/serverless"},{label:"cloud computing",permalink:"/docs/blog/tags/cloud-computing"},{label:"knative",permalink:"/docs/blog/tags/knative"},{label:"kubernetes",permalink:"/docs/blog/tags/kubernetes"},{label:"Knative-serving",permalink:"/docs/blog/tags/knative-serving"}],readingTime:9.985,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Definitive Guide to Knative Serving\u2014A Deep Dive into Theory and Architecture",description:"A Deep Dive into Theory and Architecture of Knative Serving",image:"https://knative.dev/docs/community/images/knative-audience.svg",tags:["microservices","architecture","cloud-native","Serverless","cloud computing","knative","kubernetes","Knative-serving"],date:"2024-05-01T00:00:00.000Z"},unlisted:!1,nextItem:{title:"Revolutionizing Software Development with React Flow",permalink:"/docs/blog/2024/04/25/react-flow"}},c={authorsImageUrls:[]},l=[{value:"Overview",id:"overview",level:2},{value:"Knative Serving Architecture",id:"knative-serving-architecture",level:2},{value:"Architecture Diagram",id:"architecture-diagram",level:3},{value:"Components",id:"components",level:3},{value:"HTTP Request Flows",id:"http-request-flows",level:3},{value:"Revisions",id:"revisions",level:3},{value:"Autoscaling",id:"autoscaling",level:3},{value:"Supported Autoscaler types",id:"supported-autoscaler-types",level:4},{value:"Knative Serving Autoscaling System",id:"knative-serving-autoscaling-system",level:2},{value:"APIs",id:"apis",level:3},{value:"Scaling up and down (steady state)",id:"scaling-up-and-down-steady-state",level:3},{value:"Scaling to zero",id:"scaling-to-zero",level:3},{value:"Scaling from zero",id:"scaling-from-zero",level:3},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["If you missed the first installment of our Knative series, you can catch up by diving into our previous blog post:\n",(0,s.jsx)(n.a,{href:"https://www.wedaa.tech/docs/blog/2024/04/13/overview-on-knative",children:"Dive into Knative\u2014Explore Serverless with Kubernetes"})]}),"\n",(0,s.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{alt:"Overview",src:i(2762).Z+"",width:"625",height:"313"}),(0,s.jsx)("p",{align:"center",children:(0,s.jsx)(n.a,{href:"https://technologyconversations.com/2020/08/19/serverless-computing-with-knative-and-containers-as-a-service-caas/",children:"Technology Conversations"})})]}),"\n",(0,s.jsx)(n.p,{children:"The key aspects and benefits of Knative Serving:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Serverless Platform"}),": Knative Serving is a serverless platform built on top of Kubernetes."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Deployment Simplification"}),": It simplifies the deployment of containerized applications on Kubernetes."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Auto-scaling"}),": Automatically scales applications based on demand, ensuring optimal resource utilization."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Traffic Management"}),": Provides features for managing traffic routing, allowing seamless updates and rollbacks."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Focus on Development"}),": Abstracts away infrastructure management complexities, enabling developers to focus on writing and deploying code."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Cloud-Native Applications"}),": Facilitates the development of modern, scalable, and resilient cloud-native applications."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["For an introductory exploration of Knative Serving, delve into our dedicated ",(0,s.jsx)(n.a,{href:"https://www.wedaa.tech/docs/blog/2024/04/13/overview-on-knative#knative-serving",children:"Knative Serving"})," section."]}),"\n",(0,s.jsx)(n.h2,{id:"knative-serving-architecture",children:"Knative Serving Architecture"}),"\n",(0,s.jsx)(n.h3,{id:"architecture-diagram",children:"Architecture Diagram"}),"\n",(0,s.jsx)(n.p,{children:"Knative Serving consists of several components forming the backbone of the Serverless Platform. This blog explains the high-level architecture of Knative Serving."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Architecture",src:i(4061).Z+"",width:"650",height:"614"})}),"\n",(0,s.jsx)(n.h3,{id:"components",children:"Components"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Activator"}),": The activator is part of the [data-plane]. It is responsible to queue incoming requests (if a Knative Service is scaled-to-zero). It communicates with the autoscaler to bring scaled-to-zero Services back up and forward the queued requests. Activator can also act as a request buffer to handle traffic bursts."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Autoscaler"}),": The autoscaler is responsible to scale the Knative Services based on configuration, metrics and incoming requests."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Controller"}),": The controller manages the state of Knative resources within the cluster. It watches several objects, manages the lifecycle of dependent     resources, and updates the resource state."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Queue-Proxy"}),":\tThe Queue-Proxy is a sidecar container in the Knative Service's Pod. It is responsible to collect metrics and enforcing the desired concurrency when forwarding requests to the user's container. It can also act as a queue if necessary, similar to the Activator."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Webhooks"}),":\tKnative Serving has several webhooks responsible to validate and mutate Knative Resources."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"http-request-flows",children:"HTTP Request Flows"}),"\n",(0,s.jsx)(n.p,{children:"This explains the behavior and flow of HTTP requests to an application which is running on Knative Serving."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"HTTP Request Flows",src:i(2132).Z+"",width:"938",height:"436"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Initial Request"}),": When a user sends an HTTP request to your Knative service, it first hits the ingress gateway."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Routing Decision"}),": The ingress gateway examines the request to determine which Knative service should handle it based on the requested domain name."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Service Activation"}),": Knative Serving keeps your service deployed at all times. When a request arrives and no instances are running, it promptly activates a new instance by spinning up a pod."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Scaling Decision"}),": Knative Serving checks the current load and decides how many instances of the service need to be running to handle incoming requests efficiently."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Activator Interaction"}),": For the first-time request, it goes to the activator. The activator asks the auto scaler to scale up one pod to serve the initial request, ensuring rapid response and availability."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Request Handling"}),": The request is then forwarded to one of the instances of your service, where your application code processes it."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Containerized Environment"}),": Within each pod, there are two containers:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"User Container: This container hosts your application code, serving user requests."}),"\n",(0,s.jsx)(n.li,{children:"Queue Container: This container monitors metrics and observes concurrency levels."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Auto-scaling Based on Concurrency"}),": When the concurrency exceeds the default level, the autoscaler spins up new pods to handle the increased concurrent requests, ensuring optimal performance."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Response"}),": After processing the request, your service generates a response, which is sent back through the same flow to the user who made the initial request."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Scaling Down"}),": If there is no more traffic or if the traffic decreases significantly, Knative Serving may scale down the number of running instances to save resources."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"revisions",children:"Revisions"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Revisions are Knative Serving resources representing snapshots of application code and configuration."}),"\n",(0,s.jsx)(n.li,{children:"They are created automatically in response to updates in a Configuration spec."}),"\n",(0,s.jsx)(n.li,{children:"Revisions cannot be directly created or updated; they are managed through Configuration changes."}),"\n",(0,s.jsx)(n.li,{children:"Deletion of Revisions can be forced to handle resource leaks or remove problematic Revisions."}),"\n",(0,s.jsx)(n.li,{children:"Revisions are generally immutable, but may reference mutable Kubernetes resources like ConfigMaps and Secrets."}),"\n",(0,s.jsx)(n.li,{children:"Changes in Revision defaults can lead to syntactic mutations in Revisions, affecting configuration without altering their core behavior."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"autoscaling",children:"Autoscaling"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{alt:"Kubernetes Autoscaling Options",src:i(6178).Z+"",width:"800",height:"430"}),(0,s.jsx)("p",{align:"center",children:(0,s.jsx)(n.a,{href:"https://platform9.com/blog/kubernetes-autoscaling-options-horizontal-pod-autoscaler-vertical-pod-autoscaler-and-cluster-autoscaler/",children:"Kubernetes Autoscaling Options"})})]}),"\n",(0,s.jsx)(n.p,{children:"Knative Serving provides automatic scaling, or autoscaling, for applications to match incoming demand. This is provided by default, by using the Knative Pod Autoscaler (KPA)."}),"\n",(0,s.jsx)(n.p,{children:"For example, if an application is receiving no traffic and scale to zero is enabled, Knative Serving scales the application down to zero replicas. If scaling to zero is disabled, the application is scaled down to the minimum number of replicas specified for applications on the cluster. Replicas are scaled up to meet demand if traffic to the application increases."}),"\n",(0,s.jsx)(n.h4,{id:"supported-autoscaler-types",children:"Supported Autoscaler types"}),"\n",(0,s.jsx)(n.p,{children:"Knative Serving supports the implementation of Knative Pod Autoscaler (KPA) and Kubernetes' Horizontal Pod Autoscaler (HPA)."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Knative Pod Autoscaler (KPA)","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Part of the Knative Serving core and enabled by default once Knative Serving is installed."}),"\n",(0,s.jsx)(n.li,{children:"Supports scale to zero functionality."}),"\n",(0,s.jsx)(n.li,{children:"Does not support CPU-based autoscaling."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Horizontal Pod Autoscaler (HPA)","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Not part of the Knative Serving core, and you must install Knative Serving first."}),"\n",(0,s.jsx)(n.li,{children:"Does not support scale to zero functionality."}),"\n",(0,s.jsx)(n.li,{children:"Supports CPU-based autoscaling."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"knative-serving-autoscaling-system",children:"Knative Serving Autoscaling System"}),"\n",(0,s.jsx)(n.h3,{id:"apis",children:"APIs"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"PodAutoscaler"})," (PA):","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["API: ",(0,s.jsx)(n.code,{children:"podautoscalers.autoscaling.internal.knative.dev"})]}),"\n",(0,s.jsx)(n.li,{children:"It's an abstraction that encompasses all possible PodAutoscalers, with the default implementation being the Knative Pod Autoscaler (KPA)."}),"\n",(0,s.jsxs)(n.li,{children:["The PodAutoscaler manages the ",(0,s.jsx)(n.code,{children:"scaling target"}),", the ",(0,s.jsx)(n.code,{children:"metric"})," used for scaling, and other ",(0,s.jsx)(n.code,{children:"relevant inputs"})," for the autoscaling decision-making process.","\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Scaling Target"}),": The PodAutoscaler determines what resource it should scale. This could be the number of pods, CPU utilization, memory consumption, or any other metric that indicates the workload's demand."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Metric for Scaling"}),": It specifies which metric or metrics should be used to make scaling decisions. For example, it might use CPU utilization to decide when to add or remove pods based on workload demand."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Other Inputs"}),": The PodAutoscaler considers additional factors beyond just the scaling metric. These could include constraints, policies, or thresholds that influence scaling decisions. For instance, it might have rules to prevent scaling beyond a certain limit or to ensure a minimum number of pods are always running."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"PodAutoscalers are automatically created from Revisions by default."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Metric"}),":","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["API: ",(0,s.jsx)(n.code,{children:"metrics.autoscaling.internal.knative.dev"})]}),"\n",(0,s.jsxs)(n.li,{children:["This API controls the collector of the autoscaler, determining which service to scrape data from, how to aggregate it, and other related aspects.","\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Collector Control"}),": The API controls the collector component of the autoscaler. The collector is responsible for gathering data related to the performance and behavior of the services being monitored for autoscaling."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Data Scraping"}),": It determines which service or services the autoscaler should scrape data from. This involves collecting relevant metrics such as CPU utilization, request latency, or throughput from the specified services."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Aggregation"}),": The API defines how the collected data should be aggregated. This could involve calculating averages, sums, or other statistical measures over a specific time window to provide a meaningful representation of the service's performance."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Other Related Aspects"}),": Beyond data collection and aggregation, the API likely handles other aspects such as data retention policies, thresholds for triggering scaling actions, and configurations for interacting with the autoscaler's decision-making process."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"Metrics are automatically generated from PodAutoscalers by default."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"ServerlessServices"})," (SKS):","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["API: ",(0,s.jsx)(n.code,{children:"serverlessservices.networking.internal.knative.dev"})]}),"\n",(0,s.jsx)(n.li,{children:"It's an abstraction layer built on top of Kubernetes Services, managing the data flow and the switch between using the activator as a buffer or routing directly to application instances."}),"\n",(0,s.jsx)(n.li,{children:"SKS creates two Kubernetes services for each revision: a public service and a private service."}),"\n",(0,s.jsx)(n.li,{children:"The private service points to the application instances, while the public service endpoints are managed directly by the SKS reconciler."}),"\n",(0,s.jsxs)(n.li,{children:["SKS operates in two modes: Serve and Proxy.","\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["In ",(0,s.jsx)(n.strong,{children:"Serve mode"}),", traffic flows directly to the revision's pods."]}),"\n",(0,s.jsxs)(n.li,{children:["In ",(0,s.jsx)(n.strong,{children:"Proxy mode"}),", traffic is directed to activators."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"ServerlessServices are created from PodAutoscalers."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"scaling-up-and-down-steady-state",children:"Scaling up and down (steady state)"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"steady state",src:i(1017).Z+"",width:"783",height:"591"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Steady State Operation"}),":","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The autoscaler operates continuously at a steady state."}),"\n",(0,s.jsx)(n.li,{children:"It regularly scrapes data from the currently active revision pods to monitor their performance."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Dynamic Adjustment"}),":","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"As incoming requests flow into the system, the scraped values of performance metrics change accordingly."}),"\n",(0,s.jsx)(n.li,{children:"Based on these changing metrics, the autoscaler dynamically adjusts the scale of the revision."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"SKS Functionality"}),":","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The ServerlessServices (SKS) component keeps track of changes to the deployment's size."}),"\n",(0,s.jsx)(n.li,{children:"It achieves this by monitoring the private service associated with the deployment."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Public Service Update"}),":","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"SKS updates the public service based on the changes detected in the deployment's size."}),"\n",(0,s.jsx)(n.li,{children:"This ensures that the public service endpoints accurately reflect the available instances of the revision."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"scaling-to-zero",children:"Scaling to zero"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Scaling to zero",src:i(1899).Z+"",width:"811",height:"500"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Scaling to Zero Process"})," (1):","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"A revision scales down to zero when there are no more requests in the system."}),"\n",(0,s.jsx)(n.li,{children:"All data collected by the autoscaler from revision pods and the activator reports zero concurrency, indicating no active requests."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Activator Preparation"}),":","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Before removing the last pod of the revision, the system ensures that the activator is in the path and reachable."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Proxy Mode Activation"})," (4.1):","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The autoscaler, which initiated the decision to scale to zero, directs the SKS to switch to Proxy mode."}),"\n",(0,s.jsx)(n.li,{children:"In Proxy mode, all incoming traffic is routed to the activators."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Public Service Probing"}),":","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The SKS's public service is probed continuously to ensure it returns responses from the activator."}),"\n",(0,s.jsx)(n.li,{children:"Once the public service reliably returns responses from the activator and a configurable grace period (set via scale-to-zero-grace-period) has elapsed,"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Final Scaling Down"})," (5):","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The last pod of the revision is removed, marking the successful scaling down of the revision to zero instances."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"scaling-from-zero",children:"Scaling from zero"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Scaling from zero",src:i(4385).Z+"",width:"770",height:"527"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Scaling Up Process"}),":","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"If a revision is scaled to zero and a request arrives for it, the system needs to scale it up."}),"\n",(0,s.jsx)(n.li,{children:"As the SKS is in Proxy mode, the request reaches the activator."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Request Handling"}),":","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The activator counts the incoming request and reports its appearance to the autoscaler (2.1)."}),"\n",(0,s.jsx)(n.li,{children:"It then buffers the request and monitors the SKS's private service for endpoints to appear (2.2)."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Autoscaling Cycle"})," (3):","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The autoscaler receives the metric from the activator and initiates an autoscaling cycle."}),"\n",(0,s.jsx)(n.li,{children:"This process determines the desired number of pods based on the incoming request."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Scaling Decision"})," (4):","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The autoscaling process concludes that at least one pod is needed to handle the incoming request."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Scaling Up Instructions"})," (5.1):","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The autoscaler instructs the revision's deployment to scale up to N > 0 replicas to accommodate the increased demand."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Serve Mode Activation"})," (5.2):","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The autoscaler switches the SKS into Serve mode, directing traffic to the revision's pods directly once they are up."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Endpoint Probing"}),":","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The activator monitors the SKS's private service for the appearance of endpoints."}),"\n",(0,s.jsx)(n.li,{children:"Once the endpoints come up and pass the probe successfully, the respective address is considered healthy and used to route the buffered request and any additional requests that arrived in the meantime (8.2)."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Successful Scaling Up"}),":","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The revision has successfully scaled up from zero to handle the incoming request."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,s.jsxs)(n.p,{children:["In summary, we've explored the core concepts of Knative Serving, from its architecture to scaling mechanisms. Next, we'll dive into practical implementation in our upcoming blog. Also, stay tuned for the integration of the serverless component into the ",(0,s.jsx)(n.a,{href:"https://app.wedaa.tech/",children:"WeDAA"})," Platform, making prototyping and deployment faster and easier than ever."]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},2762:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/00-overview-864fc8c0625a8618b6b29f81448f516c.png"},4061:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/01-architecture-f34a59cc6df015d89698eaaf7c37498f.png"},2132:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/02-http-request-flow-9ce25bf99935eeaf5fe92f4a2b9b15f6.png"},6178:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/03-autoscaling-32d8341a0ce844ed806be8ea539a2a17.png"},1017:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/04-steady-state-62cf2df517223eaaedf233840e41a74c.png"},1899:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/05-scaling-to-zero-edbbc4a96b34af7d03439022eaf00ecc.png"},4385:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/06-scaling-from-zero-95be865fd7ac19f2617d836ffb91726b.png"},1151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>o});var s=i(7294);const t={},r=s.createContext(t);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);