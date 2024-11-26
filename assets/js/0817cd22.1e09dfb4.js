"use strict";(self.webpackChunkdocusaurus_documentation=self.webpackChunkdocusaurus_documentation||[]).push([[5754],{565:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var t=n(5893),r=n(1151);const s={title:"Microservice architecture using GoMicro",description:"Building Microservices architecture using GoMicro",image:"https://bairesdev.mo.cloudinary.net/blog/2023/08/golang.jpg?tx=w_1920,q_auto",tags:["go","microservices","prototyping"],date:new Date("2024-04-17T00:00:00.000Z")},o=void 0,a={permalink:"/docs/blog/2024/04/17/Go-Micro",source:"@site/blog/2024-04-17-Go-Micro.md",title:"Microservice architecture using GoMicro",description:"Building Microservices architecture using GoMicro",date:"2024-04-17T00:00:00.000Z",formattedDate:"April 17, 2024",tags:[{label:"go",permalink:"/docs/blog/tags/go"},{label:"microservices",permalink:"/docs/blog/tags/microservices"},{label:"prototyping",permalink:"/docs/blog/tags/prototyping"}],readingTime:4.81,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Microservice architecture using GoMicro",description:"Building Microservices architecture using GoMicro",image:"https://bairesdev.mo.cloudinary.net/blog/2023/08/golang.jpg?tx=w_1920,q_auto",tags:["go","microservices","prototyping"],date:"2024-04-17T00:00:00.000Z"},unlisted:!1,prevItem:{title:"Unveiling the Power of Feature Flags in Software Development",permalink:"/docs/blog/2024/04/18/feature-flags"},nextItem:{title:"Dive into Knative\u2014Explore Serverless with Kubernetes",permalink:"/docs/blog/2024/04/13/overview-on-knative"}},c={authorsImageUrls:[]},l=[{value:"Why Microservice Architecture",id:"why-microservice-architecture",level:3},{value:"Meet GOMICRO - A framework for distributed systems development",id:"meet-gomicro---a-framework-for-distributed-systems-development",level:2},{value:"How Go Micro helps us??",id:"how-go-micro-helps-us",level:3},{value:"Tutorial",id:"tutorial",level:2},{value:"Application Quickstart Guide",id:"application-quickstart-guide",level:3},{value:"Understanding the code",id:"understanding-the-code",level:3},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const i={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.p,{children:"In today's scenario, we are seeing a shift from the monolithic landscape to microservice landscape. In simple words it can be termed as breaking a complex problem into smaller parts and making it easier to manage and develop. In Go to make this easier there is a framework GO MICRO - a helpful framework for building microservice applications with the Go programming language."}),"\n",(0,t.jsx)(i.h3,{id:"why-microservice-architecture",children:"Why Microservice Architecture"}),"\n",(0,t.jsx)(i.p,{children:"Imagine a library where all the books used to be stacked in one massive room. It would be chaotic trying to find the book you needed among the towering shelves. But now, picture this library transformed into a series of smaller rooms, each dedicated to a specific genre\u2014mystery, romance, science fiction, and so on. Each room is organized neatly, making it easier for readers to find the books they're looking for without getting lost in the sea of literature. This is similar to how microservices work in software\u2014they break down complex applications into smaller, specialized components, making it simpler for developers to manage and maintain the software."}),"\n",(0,t.jsx)(i.p,{children:"Now how do we build them??"}),"\n",(0,t.jsx)(i.h2,{id:"meet-gomicro---a-framework-for-distributed-systems-development",children:"Meet GOMICRO - A framework for distributed systems development"}),"\n",(0,t.jsx)(i.p,{children:"In the world of microservices, Go Micro is like your trusty sidekick. It helps developers build and manage microservices without all the headaches of doing it from scratch. Think of it as a toolbox full of handy tools to make building microservices easier and faster."}),"\n",(0,t.jsx)(i.h3,{id:"how-go-micro-helps-us",children:"How Go Micro helps us??"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Authentication and Authorization"})," - Security is paramount in any architecture.Gomicro provide authorization.It seamlessly integrates with authentication providers like Keycloak, serving as a middleware to authenticate incoming requests."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Service Discovery"})," - Effective communication among microservices necessitates a reliable service discovery mechanism. Go Micro simplifies this with built-in support for mdns (Multicast DNS) and offers integrable libraries (plugins) for popular options such as Eureka, Etcd, Consul, and NATS, among others."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Messaging"})," - Messaging is an important aspect in the microservice architecture and event driven architectures. Go Micro eases the implementation of pub-sub models and other messaging paradigms with its plugin-based approach. Whether it's HTTP event message brokering or support for NATS, RabbitMQ, or Kafka, Go Micro has you covered."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Protocols"})," - Go Micro supports communication via HTTP and RPC (Remote Procedure Call), providing abstractions for synchronous communication. This flexibility enables developers to choose the most suitable communication protocol for their specific use cases."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"tutorial",children:"Tutorial"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Visit WeDAA"}),": Go to ",(0,t.jsx)(i.a,{href:"https://app.wedaa.tech/canvastocode",children:"WeDAA"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Choose GoMicro Application"}),": Navigate to the service tab in the sidebar and select Go. Drag and drop it onto the canvas."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Connect a Database and Add Authentication"}),": Connect a database to the application. Additionally, add authentication to secure the  application. WeDAA supports Keycloak as an authentication IDP."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Sample GOMICRO WeDAA Architecture",src:n(9597).Z+"",width:"1848",height:"939"})}),"\n",(0,t.jsxs)(i.ol,{start:"4",children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Fill in Required Details"}),": Provide necessary details for the service and database connection."]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Sample GOMICRO WeDAA Architecture",src:n(1826).Z+"",width:"1843",height:"938"})}),"\n",(0,t.jsxs)(i.ol,{start:"5",children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Validate and Review"}),": Click on validate to review the setup. Ensure everything is configured correctly."]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Sample GOMICRO WeDAA Architecture",src:n(8774).Z+"",width:"1847",height:"939"})}),"\n",(0,t.jsxs)(i.ol,{start:"6",children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Cloud Service Setup (Optional)"}),": Weeda has support for Azure, AWS and minikube.We can opt for one and fill in the necessary details to deploy applications in the specific cloud provider.we can skip this step for now by selecting none."]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Sample GOMICRO WeDAA Architecture",src:n(5456).Z+"",width:"1850",height:"936"})}),"\n",(0,t.jsxs)(i.ol,{start:"7",children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Generate Project Zip"}),": After submission, a zip file containing the project will be generated."]}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"application-quickstart-guide",children:"Application Quickstart Guide"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Prerequisites"}),": Ensure Docker is set up in advance if Keycloak is not configured as standalone or if PostgreSQL is not set up separately. Keycloak and PostgreSQL provided are Dockerized containers."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Start Keycloak and PostgreSQL"}),":"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:"   docker compose -f docker/keycloak.yml up -d\n   docker compose -f docker/postgresql.yml up -d\n"})}),"\n",(0,t.jsxs)(i.ol,{start:"3",children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Start the Go Service"}),": Once Keycloak and PostgreSQL services are up, start the Go service."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Install Dependencies and Run the Service"}),":"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:"   go mod tidy\n   go run .\n"})}),"\n",(0,t.jsx)(i.p,{children:"This command will install any required dependencies and then run the Go service."}),"\n",(0,t.jsx)(i.h3,{id:"understanding-the-code",children:"Understanding the code"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-go",children:'package main\n\nfunc main() {\n\tapp.Setconfig()\n\tmigrate.MigrateAndCreateDatabase()\n\tauth.SetClient()\n\tconfig.InitializeDb()\n\tport :=app.GetVal("GO_MICRO_SERVICE_PORT")\n\tsrv := micro.NewService(\n\t\tmicro.Server(mhttp.NewServer()),\n    )\n\topts1 := []micro.Option{\n\t\tmicro.Name("backendone"),\n\t\tmicro.Version("latest"),\n\t\tmicro.Address(":"+port),\n\t}\n\tsrv.Init(opts1...)\n\tr := mux.NewRouter().StrictSlash(true)\n\tr.Use(corsMiddleware)\n\tregisterRoutes(r)\t\t\n\tvar handlers http.Handler = r\n\t\n    if err := micro.RegisterHandler(srv.Server(), handlers); err != nil {\n\t\tlogger.Fatal(err)\n\t}\n\t\n\tif err := srv.Run(); err != nil {\n\t\tlogger.Fatal(err)\n\t}\n}\n'})}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Config Initialization"})," - The application begins by loading configuration values from externalized YAML files into the environment. This ensures that the application has access to the necessary configuration parameters."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Database Migration"})," - WeDAA supports migration for PostgreSQL databases. Using the go-migrate package library, a new database is created and data initialization is performed. This ensures that the database is properly set up and populated with initial data."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Authentication Setup"})," - The code proceeds by setting up the authentication client,here Keycloak is being used as the identity provider (IDP) for authentication. This involves establishing a connection to Keycloak."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Microservice Setup"})," - The micro.NewService function is a notation used by GoMicro to set up the microservice. Here, configurations are provided to the microservice via options. This step initializes the microservice and prepares it to handle incoming requests."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Router Setup"})," - The code utilizes the mux router to create a routing setup. This involves defining endpoints and their corresponding handlers. The router is then registered with GoMicro, indicating that the microservice should use this router to handle incoming requests."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Application Execution"})," - Finally, the application is run. This step starts the microservice, allowing it to listen for incoming requests and handle them according to the defined routing setup."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,t.jsx)(i.p,{children:"Go Micro leverages Go interfaces for each distributed system abstraction, rendering them pluggable and runtime-agnostic. This inherent flexibility allows developers to seamlessly integrate various underlying technologies, optimizing microservice development in a clean and efficient manner."})]})}function h(e={}){const{wrapper:i}={...(0,r.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},5456:(e,i,n)=>{n.d(i,{Z:()=>t});const t=n.p+"assets/images/go_micro_four-b8c2c9bb30e32b1137fccd8d67b48d42.png"},9597:(e,i,n)=>{n.d(i,{Z:()=>t});const t=n.p+"assets/images/go_micro_one-f2b63d82818c11bb0976bc6d9c85b011.png"},8774:(e,i,n)=>{n.d(i,{Z:()=>t});const t=n.p+"assets/images/go_micro_three-8da8e0e5ad804ee0b79f8b7d0372ebab.png"},1826:(e,i,n)=>{n.d(i,{Z:()=>t});const t=n.p+"assets/images/go_micro_two-2a7096b9f917aa1abe769d5d513eaa1e.png"},1151:(e,i,n)=>{n.d(i,{Z:()=>a,a:()=>o});var t=n(7294);const r={},s=t.createContext(r);function o(e){const i=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(s.Provider,{value:i},e.children)}}}]);