"use strict";(self.webpackChunkdocusaurus_documentation=self.webpackChunkdocusaurus_documentation||[]).push([[3605],{4189:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>v,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var i=s(5893),t=s(1151);const r={title:"Dive into Knative\u2014Explore Serverless with Kubernetes",description:"Overview on Knative",image:"https://dzrge5zzbsh6q.cloudfront.net/Enterprise-Software-Development-with-Knative-1024x614.jpg.webp",tags:["microservices","architecture","cloud-native","Serverless","cloud computing","knative","kubernetes"],date:new Date("2024-04-13T00:00:00.000Z")},o=void 0,a={permalink:"/docs/blog/2024/04/13/overview-on-knative",source:"@site/blog/2024-04-13-overview-on-knative.md",title:"Dive into Knative\u2014Explore Serverless with Kubernetes",description:"Overview on Knative",date:"2024-04-13T00:00:00.000Z",formattedDate:"April 13, 2024",tags:[{label:"microservices",permalink:"/docs/blog/tags/microservices"},{label:"architecture",permalink:"/docs/blog/tags/architecture"},{label:"cloud-native",permalink:"/docs/blog/tags/cloud-native"},{label:"Serverless",permalink:"/docs/blog/tags/serverless"},{label:"cloud computing",permalink:"/docs/blog/tags/cloud-computing"},{label:"knative",permalink:"/docs/blog/tags/knative"},{label:"kubernetes",permalink:"/docs/blog/tags/kubernetes"}],readingTime:7.775,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Dive into Knative\u2014Explore Serverless with Kubernetes",description:"Overview on Knative",image:"https://dzrge5zzbsh6q.cloudfront.net/Enterprise-Software-Development-with-Knative-1024x614.jpg.webp",tags:["microservices","architecture","cloud-native","Serverless","cloud computing","knative","kubernetes"],date:"2024-04-13T00:00:00.000Z"},unlisted:!1,nextItem:{title:"Building event driven microservices architecture with RabbitMQ",permalink:"/docs/blog/2024/01/15/rabbitmq"}},l={authorsImageUrls:[]},c=[{value:"What is serverless?",id:"what-is-serverless",level:2},{value:"Serverless Computing: A Catering Service Analogy",id:"serverless-computing-a-catering-service-analogy",level:3},{value:"Kubernetes-Powered Serverless: Introducing Knative",id:"kubernetes-powered-serverless-introducing-knative",level:3},{value:"Exploring Knative Features: Simplifying Serverless Deployment",id:"exploring-knative-features-simplifying-serverless-deployment",level:3},{value:"Knative Components",id:"knative-components",level:2},{value:"Knative Serving",id:"knative-serving",level:3},{value:"Knative Serving focuses on:",id:"knative-serving-focuses-on",level:4},{value:"Knative Eventing",id:"knative-eventing",level:3},{value:"Use-cases",id:"use-cases",level:4},{value:"Use Knative eventing when:",id:"use-knative-eventing-when",level:4},{value:"Components",id:"components",level:4},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const n={a:"a",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"what-is-serverless",children:"What is serverless?"}),"\n",(0,i.jsx)(n.p,{children:"Serverless is a cloud-native development model that allows developers to build and run applications without having to manage servers."}),"\n",(0,i.jsx)(n.p,{children:"There are still servers in serverless, but they are abstracted away from app development. A cloud provider handles the routine work of provisioning, maintaining, and scaling the server infrastructure. Developers can simply package their code in containers for deployment."}),"\n",(0,i.jsx)(n.p,{children:"Once deployed, serverless apps respond to demand and automatically scale up and down as needed."}),"\n",(0,i.jsx)(n.h3,{id:"serverless-computing-a-catering-service-analogy",children:"Serverless Computing: A Catering Service Analogy"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{alt:"Catering Service Analogy",src:s(6843).Z+"",width:"1480",height:"722"}),(0,i.jsx)("p",{align:"center",children:(0,i.jsx)(n.a,{href:"https://www.freepik.com/premium-vector/catering-concept-illustration-idea-food-service-hotel-event-restaurant-banquet-party-catering-service-web-banner-illustration_10275389.htm",children:"Catering Service Analogy"})})]}),"\n",(0,i.jsx)(n.p,{children:"Imagine you're hosting a dinner party. In a traditional hosting scenario, you'd have to plan everything from cooking the food to setting the table and serving your guests. This is like managing servers in traditional computing \u2013 you have to handle all the details yourself."}),"\n",(0,i.jsx)(n.p,{children:"Now, consider a serverless approach as hiring a catering service for your party. You tell them what you need, and they take care of everything \u2013 from cooking the food to setting up and serving. You don't have to worry about the kitchen logistics or cleaning up afterward; you can focus on enjoying the party with your guests. Similarly, in serverless computing, you provide your code, and the cloud provider takes care of the infrastructure, scaling, and management, allowing you to focus on writing and improving your application."}),"\n",(0,i.jsx)(n.h3,{id:"kubernetes-powered-serverless-introducing-knative",children:"Kubernetes-Powered Serverless: Introducing Knative"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{alt:"Serverless Framework Knative",src:s(3349).Z+"",width:"1895",height:"849"}),(0,i.jsx)("p",{align:"center",children:(0,i.jsx)(n.a,{href:"https://www.serverless.com/blog/serverless-framework-knative-component",children:"Serverless Framework Knative"})})]}),"\n",(0,i.jsx)(n.p,{children:"In the rapidly evolving landscape of cloud computing, serverless technology has become increasingly popular for its simplicity in deploying applications without worrying about infrastructure. Knative, built on top of Kubernetes (k8s), extends the power of Kubernetes to manage serverless workloads seamlessly. While major cloud providers like AWS, Google Cloud, and Microsoft Azure offer their serverless solutions, Knative stands out as an open-source, platform-agnostic framework."}),"\n",(0,i.jsx)(n.p,{children:"Collaboratively developed by industry leaders like Google and Red Hat, Knative abstracts away the complexities of deploying, scaling, and managing containerized applications, allowing developers to focus solely on writing code without worrying about infrastructure management. Knative simplifies serverless deployments across diverse cloud environments, revolutionizing the way applications are developed and deployed in modern cloud-native architectures."}),"\n",(0,i.jsx)(n.h3,{id:"exploring-knative-features-simplifying-serverless-deployment",children:"Exploring Knative Features: Simplifying Serverless Deployment"}),"\n",(0,i.jsx)(n.p,{children:"Serverless refers to running back-end programs and processes in the cloud. Serverless works on an as-used basis, meaning that companies only use what they pay for. Knative is a platform-agnostic solution for running serverless deployments."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Knative Features",src:s(7902).Z+"",width:"1395",height:"539"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Simpler Abstractions"}),": simplifies the YAML configuration process by providing custom CRDs (Custom Resource Definitions),\nstreamlining the abstraction layers and making development workflows more straightforward."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Autoscaling"}),": autoscaling feature seamlessly adjusts resource allocation, scaling applications down to zero and up from zero based on demand."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Progressive Rollouts"}),": Customize your rollout strategy with Knative's Progressive Rollouts feature, offering flexibility to select the ideal\napproach based on your specific requirements."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Event Integrations"}),": Easily manage events from diverse sources with Knative's Event Integrations, streamlining event handling for seamless integration."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Handle Events"}),": Effortlessly trigger handlers from the event broker with Knative's event handling capabilities, ensuring seamless integration\nand streamlined workflow."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Plugable"}),": Knative's pluggable architecture ensures seamless integration and extension within the Kubernetes ecosystem, providing\nflexibility and scalability for diverse use cases."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"knative-components",children:"Knative Components"}),"\n",(0,i.jsx)(n.p,{children:"Knative has two main components that empower teams working with Kubernetes. Serving and\nEventing work together to automate and manage tasks and applications."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Serving Eventing",src:s(7944).Z+"",width:"932",height:"353"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Knative Serving"}),": Allows running serverless containers in Kubernetes with ease. Knative takes care of the details of networking,\nautoscaling (even to zero), and revision tracking. Teams can focus on core logic using any programming language."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Knative Eventing"}),": Allows universal subscription, delivery and management of events. Build modern apps by attaching compute to a\ndata stream with declarative event connectivity and developer friendly object models."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"knative-serving",children:"Knative Serving"}),"\n",(0,i.jsx)(n.p,{children:"Knative Serving defines a set of objects as Kubernetes Custom Resource Definitions (CRDs). These objects get used to define and control how your serverless workload behaves on the cluster:"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{alt:"Knative Serving",src:s(3484).Z+"",width:"644",height:"432"}),(0,i.jsxs)("p",{align:"center",children:["Savita Ashture, ",(0,i.jsx)(n.a,{href:"https://creativecommons.org/licenses/by-sa/4.0/",children:"CC BY-SA 4.0"})]})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Service"}),": A Knative Service describes a combination of a route and a configuration as shown above. It is a higher-level entity that does not provide any additional functionality. It should make it easier to deploy an application quickly and make it available. You can define the service to always route traffic to the latest revision or a pinned revision."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Route"}),": The Route describes how a particular application gets called and how the traffic gets distributed across the different revisions. There is a high chance that several revisions can be active in the system at any given time based on the use case in those scenarios. It's the responsibility of routes to split the traffic and assign to revisions."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Configuration"}),": The Configuration describes what the corresponding deployment of the application should look like. It provides a clean separation between code and configuration and follows the Twelve-Factor App methodology. Modifying a configuration creates a new revision."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Revision"}),": The Revision represents the state of a configuration at a specific point in time. A revision, therefore, gets created from the configuration. Revisions are immutable objects, and you can retain them for as long as useful. Several revisions per configuration may be active at any given time, and you can automatically scale up and down according to incoming traffic."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"knative-serving-focuses-on",children:"Knative Serving focuses on:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Rapid deployment of serverless containers."}),"\n",(0,i.jsx)(n.li,{children:"Autoscaling includes scaling pods down to zero."}),"\n",(0,i.jsx)(n.li,{children:"Support for multiple networking layers such as Ambassador, Contour, Kourier, Gloo, and Istio for integration into existing environments."}),"\n",(0,i.jsx)(n.li,{children:"Give point-in-time snapshots of deployed code and configurations."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"knative-eventing",children:"Knative Eventing"}),"\n",(0,i.jsx)(n.p,{children:"Knative Eventing is a collection of APIs that enable you to use an event-driven architecture with your applications. You can create components that route events from event producers to event consumers, known as sinks, that receive events."}),"\n",(0,i.jsx)(n.h4,{id:"use-cases",children:"Use-cases"}),"\n",(0,i.jsx)(n.p,{children:"General areas of application are:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Publishing an event without creating a consumer. You can send events to a broker as an HTTP POST, and use binding to decouple the destination configuration from your application that produces events."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Consuming an event without creating a publisher. You can use a trigger to consume events from a broker based on event attributes."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"IoT, network monitoring, application monitoring, website testing and validation, and mobile app front-end processes that act as event generators."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"use-knative-eventing-when",children:"Use Knative eventing when:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"When you want to publish an event without creating a consumer. You can send events to a broker as an HTTP POST, and use binding to decouple the destination configuration from your application that produces events."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"When you want to consume an event without creating a publisher. You can use a trigger to consume events from a broker based on event attributes. The application receives events as an HTTP POST."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"When you want to create components that route events from event producers to event consumers, known as sinks, that receive events. Sinks can also be configured to respond to HTTP requests by sending a response event."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{alt:"Knative Eventing",src:s(1276).Z+"",width:"880",height:"366"}),(0,i.jsx)("p",{align:"center",children:(0,i.jsx)(n.a,{href:"https://dev.to/ashokan/knative-eventing-e95",children:"Eventing Components"})})]}),"\n",(0,i.jsx)(n.h4,{id:"components",children:"Components"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Sources"}),": Knative eventing sources are objects that generate events and send them to a sink. They are created by instantiating a custom resource (CR) from a source object. There are different types of sources, such as PingSource, ApiServerSource, KafkaSource, etc., depending on the event producer."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Sinks"}),": Knative eventing sinks are objects that receive events from sources or other components. They can be Addressable or Callable resources that have an address defined in their status.address.url field. Addressable sinks can receive and acknowledge an event delivered over HTTP, while Callable sinks can also respond to HTTP requests by sending a response event. Knative Services, Channels, and Brokers are all examples of sinks."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Brokers"}),": Knative eventing brokers are objects that define an event mesh for collecting a pool of events. Brokers provide a discoverable endpoint for event ingress, and use triggers for event delivery. Event producers can send events to a broker by posting the event."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Channels"}),": Channels are custom resources that define a single event-forwarding and persistence layer. You can connect channels to various backends for sourcing events, such as In-Memory, Kafka, or GCP PubSub. You can also fan-out received events, through subscriptions, to multiple destinations, or sinks. Examples of sinks include brokers and Knative services."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Subscriptions"}),": Knative subscriptions are objects that enable event delivery from a channel to an event sink, also known as a subscriber. A subscription specifies the channel and the sink to deliver events to, as well as some sink-specific options, such as how to handle failures."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Triggers"}),": Knative Triggers are objects that enable seamless integration with external event sources, allowing applications to react dynamically to incoming events, fostering the development of scalable, event-driven architectures."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,i.jsx)(n.p,{children:"In this overview, we've explored serverless computing with Knative on Kubernetes, covering core concepts, features, and components. Stay tuned for practical implementations and real-world use cases in upcoming blogs, unlocking Knative's full potential for your projects. With Knative, the future of serverless on Kubernetes is brighter than ever."}),"\n",(0,i.jsxs)(n.p,{children:["Furthermore, I'm excited to announce that our platform, ",(0,i.jsx)(n.a,{href:"https://app.wedaa.tech/",children:"WeDAA"}),", will be hosting these upcoming blogs. WeDAA is committed to providing innovative solutions, and soon, we'll be incorporating serverless capabilities into our platform. Keep an eye out for our future updates, as we continue to evolve and enhance our services to meet your needs."]})]})}function v(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},6843:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/01-catering-service-analogy-adaf44c7098d69ce237b4b79d9ce91c5.png"},3349:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/02-serverless-framework-knative-257bb2f43332d877463ef0e79344d262.png"},7902:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/03-knative-features-ab0d3d0da33f8a2fcf5e74219d0e8fff.png"},7944:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/04-serving-eventing-a2e56a6edb5b03ded58da4a919040440.png"},3484:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/05-knative-serving-81d75b163b72ae38758471ef4605a10b.png"},1276:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/06-knative-eventing-eda6ccc26ee2faba5845f2bcd75bf703.png"},1151:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>o});var i=s(7294);const t={},r=i.createContext(t);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);