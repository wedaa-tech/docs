"use strict";(self.webpackChunkdocusaurus_documentation=self.webpackChunkdocusaurus_documentation||[]).push([[322],{7683:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var i=t(5893),o=t(1151);const a={title:"Securing React applications with Keycloak",description:'Intergating Keycloak with React app with "react-oidc-context"',image:"https://i.imgur.com/jtapJ0a.png",tags:["keycloak","react","authentication","prototyping","boilerplate"],date:new Date("2023-12-26T00:00:00.000Z")},r=void 0,c={permalink:"/docs/blog/2023/12/26/Intergating-keycloak-with-react-app",source:"@site/blog/2023-12-26-Intergating-keycloak-with-react-app.md",title:"Securing React applications with Keycloak",description:'Intergating Keycloak with React app with "react-oidc-context"',date:"2023-12-26T00:00:00.000Z",formattedDate:"December 26, 2023",tags:[{label:"keycloak",permalink:"/docs/blog/tags/keycloak"},{label:"react",permalink:"/docs/blog/tags/react"},{label:"authentication",permalink:"/docs/blog/tags/authentication"},{label:"prototyping",permalink:"/docs/blog/tags/prototyping"},{label:"boilerplate",permalink:"/docs/blog/tags/boilerplate"}],readingTime:5.52,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Securing React applications with Keycloak",description:'Intergating Keycloak with React app with "react-oidc-context"',image:"https://i.imgur.com/jtapJ0a.png",tags:["keycloak","react","authentication","prototyping","boilerplate"],date:"2023-12-26T00:00:00.000Z"},unlisted:!1,prevItem:{title:"Building event driven microservices architecture with RabbitMQ",permalink:"/docs/blog/2024/01/15/rabbitmq"},nextItem:{title:"Transitioning from Boilerplate Development to Scaffolding Frameworks",permalink:"/docs/blog/2023/11/11/boilerplate-to-scaffolding"}},s={authorsImageUrls:[]},l=[{value:"\ud83d\ude80 Quickstart:",id:"-quickstart",level:3},{value:"\ud83e\udde0 Understanding the Generated Code",id:"-understanding-the-generated-code",level:3},{value:"\ud83d\udea6 Getting Started",id:"-getting-started",level:3},{value:"\ud83d\udcf8 Example images in action",id:"-example-images-in-action",level:3},{value:"\u2728 Conclusion",id:"-conclusion",level:2},{value:"\ud83d\ude80 Quick Dive",id:"-quick-dive",level:3},{value:"\ud83d\udee0\ufe0f Further Exploration",id:"\ufe0f-further-exploration",level:3},{value:"\ud83c\udf10 Beyond the Horizon",id:"-beyond-the-horizon",level:3},{value:"\ud83d\ude80 Ready, Set, Code!",id:"-ready-set-code",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["In the fast-paced world of web development, prioritizing the security of our applications is paramount. This blog post takes you on a journey to enhance the security of your React app by seamlessly integrating it with ",(0,i.jsx)(n.a,{href:"https://www.keycloak.org/documentation",children:(0,i.jsx)(n.strong,{children:"Keycloak"})}),", a robust authentication and authorization server. To simplify this process, we'll leverage the npm package ",(0,i.jsx)(n.a,{href:"https://www.npmjs.com/package/react-oidc-context",children:(0,i.jsx)(n.strong,{children:"react-oidc-context"})}),", bridging React and Keycloak while implementing OpenID Connect (OIDC). Whether you're a seasoned developer or just stepping into React and authentication, this post provides practical insights to bolster the security posture of your web application. Let's dive into the world of React, Keycloak, and react-oidc-context for a more secure development experience."]}),"\n",(0,i.jsx)(n.h3,{id:"-quickstart",children:"\ud83d\ude80 Quickstart:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Visit ",(0,i.jsx)(n.a,{href:"https://app.wedaa.tech/",children:(0,i.jsx)(n.strong,{children:"app.wedaa.tech"})})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:'Click on the "Static Web page" component'}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://i.imgur.com/aCPQE39.png",alt:"Choose Framework"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Select a frontend framework: React, then click next"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://i.imgur.com/ROlem4b.png",alt:"Choose React"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Choose Authentication and Authorization: Keycloak, then click Next"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://i.imgur.com/3dX4Ttc.png",alt:"Choose Keycloak"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:'Review your project composition and confirm by clicking "Go to Canvas"'}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://i.imgur.com/KNTDOUt.png",alt:"Review Composition"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:'Provide a valid name to your prototype and click on "Validate"'}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://i.imgur.com/FVw7YEp.png",alt:"Prototype Validation"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Review your prototype configuration, then click Next"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://i.imgur.com/NYlY6pF.png",alt:"Prototype Configuration"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:'Finally, click "Generate Code" to download the secured React application'}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://i.imgur.com/kJiRTHB.png",alt:"Generate Code"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"WeDAA offers a pre-configured React application secured by Keycloak. Simply extract our application, follow the instructions in the README, and initiate your application to seamlessly experience it first-hand."}),"\n",(0,i.jsx)(n.h3,{id:"-understanding-the-generated-code",children:"\ud83e\udde0 Understanding the Generated Code"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"src/index.js"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"// Code for initializing React application with authentication and authorization capabilities.\nimport React from 'react';\nimport ReactDOM from 'react-dom/client';\nimport './index.css';\nimport App from './App';\nimport reportWebVitals from './reportWebVitals';\nimport { AuthProvider } from 'react-oidc-context';\n\nconst oidcConfig = {\n  authority: process.env.REACT_APP_OIDC_AUTHORITY,\n  client_id: process.env.REACT_APP_OIDC_CLIENT_ID,\n  redirect_uri: process.env.REACT_APP_PROJECT_URL,\n  // ...\n};\n\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(\n  <AuthProvider {...oidcConfig}>\n    <App />\n  </AuthProvider>\n);\n\n// If you want to start measuring performance in your app, pass a function\n// to log results (for example: reportWebVitals(console.log))\n// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals\nreportWebVitals();\n\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["This code initializes a React application with authentication and authorization capabilities using the ",(0,i.jsx)(n.a,{href:"https://www.npmjs.com/package/react-oidc-context",children:(0,i.jsx)(n.strong,{children:"react-oidc-context"})})," library."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"The main application (App) is wrapped in an AuthProvider with configurations derived from the OIDC parameters specified in the oidcConfig object."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"The oidcConfig object contains configuration parameters required for OpenID Connect authentication."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Environment variables (",(0,i.jsx)(n.code,{children:"REACT_APP_OIDC_AUTHORITY, REACT_APP_OIDC_CLIENT_ID, and REACT_APP_PROJECT_URL"}),") are used to dynamically set these values."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsx)(n.li,{children:"dotenv (.env file)"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"// Environment variables for configuring the React application.\nPORT=4200\nGENERATE_SOURCEMAP=false\n\nREACT_APP_PROJECT_NAME=webapp\nREACT_APP_PROJECT_URL=http://localhost:4200\n\n\n# WEDAA \nREACT_APP_WEDAA_DOCS=https://wedaa-tech.github.io\nREACT_APP_WEDAA_GITHUB=https://github.com/wedaa-tech\n\n# OIDC Configuration\nREACT_APP_OIDC_AUTHORITY=http://localhost:9080/realms/jhipster\nREACT_APP_OIDC_CLIENT_ID=web_app\n\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsx)(n.li,{children:"src/config/auth/privateRoute.js"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"// Code for defining a PrivateRoute component for protecting routes based on authentication status.\nimport React from 'react';\nimport { useAuth } from 'react-oidc-context';\n\nconst PrivateRoute = ({ children }) => {\n  const auth = useAuth();\n\n  switch (auth.activeNavigator) {\n    case 'signinSilent':\n      return <div>Signing you in...</div>;\n    case 'signoutRedirect':\n      return <div>Signing you out...</div>;\n  }\n\n  if (auth.isLoading) {\n    // <div>Loading...</div>;\n    return <div></div>;\n  }\n\n  if (auth.error) {\n    return <div>Oops... {auth.error.message}</div>;\n  }\n  if (!auth.isAuthenticated) {\n    let originPath = window.location.pathname;\n    auth.signinRedirect({\n      redirect_uri: process.env.REACT_APP_PROJECT_URL.concat(originPath),\n    });\n  }\n\n  if (auth.isAuthenticated) {\n    window.history.replaceState({}, document.title, window.location.pathname);\n    return <>{children}</>;\n  }\n};\n\nexport default PrivateRoute;\n\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"This code defines a React component called PrivateRoute that serves as a wrapper for protecting certain routes in your application based on authentication status."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"The PrivateRoute component takes a children prop, which represents the content that should be rendered if the user is authenticated."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Switch statement checks the activeNavigator property in the authentication context. If the user is in the process of a silent sign-in or sign-out redirect, it displays a corresponding message."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"If the authentication context is still loading, the component returns an empty div (essentially doing nothing until authentication data is available)."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"If the user is not authenticated, it initiates a redirection to the authentication server using the signinRedirect method. It also captures the current path to redirect the user back to the intended page after authentication."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"If the user is authenticated, it updates the browser history to remove sensitive information and renders the original children content."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.ol,{start:"4",children:["\n",(0,i.jsx)(n.li,{children:"docker/"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"|_docker\n    |_realm-config\n            |_jhipster-realm.json\n    |_keycloak.yml\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"The Docker directory houses a Docker Compose configuration for Keycloak. This configuration initiates a Keycloak container that serves as the authentication server for our React application."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Within the docker/realm-config directory, there is a JSON-formatted realm configuration. This information, presented in JSON format, is essential for our React application as it serves as the OIDC (OpenID Connect) configuration."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"-getting-started",children:"\ud83d\udea6 Getting Started"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Start the keycloak server"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"npm run docker:keycloak:up\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsx)(n.li,{children:"Install dependencies for the first time."}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"npm install\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsx)(n.li,{children:"Start you React application"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"npm start\n"})}),"\n",(0,i.jsx)(n.h3,{id:"-example-images-in-action",children:"\ud83d\udcf8 Example images in action"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Home page of the React application generated via WeDAA."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://i.imgur.com/WPwAEL9.png",alt:"Home page"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Login Page for the React application powered by keycloak (click on the sign in button to land on this page, by default two users are provided [user,admin]; password is same as username)."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://i.imgur.com/betJU5z.png",alt:"Login Page"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Home page after sucessful Login."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://i.imgur.com/RuRXzHs.png",alt:"Logged In Home page"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"-conclusion",children:"\u2728 Conclusion"}),"\n",(0,i.jsxs)(n.p,{children:["Congratulations! \ud83c\udf89 You've successfully navigated the realm of securing your React applications with the formidable duo of Keycloak and ",(0,i.jsx)(n.code,{children:"react-oidc-context"}),". As you embark on your coding journey, armed with a fortified understanding of authentication and authorization, here's a recap of your key accomplishments:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Seamlessly integrated Keycloak as the authentication and authorization powerhouse."}),"\n",(0,i.jsxs)(n.li,{children:["Leveraged the elegance of ",(0,i.jsx)(n.code,{children:"react-oidc-context"})," to bridge the realms of React and OpenID Connect."]}),"\n",(0,i.jsx)(n.li,{children:"Initiated a secure React application that not only prioritizes user experience but also champions data protection."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"-quick-dive",children:"\ud83d\ude80 Quick Dive"}),"\n",(0,i.jsxs)(n.p,{children:["Before you go, let's take one last glance at the live example you've created. Head over to ",(0,i.jsx)(n.a,{href:"https://app.wedaa.tech/",children:(0,i.jsx)(n.strong,{children:"app.wedaa.tech"})})," and witness your React application in action. From dynamic prototyping to authentication magic, your creation stands as a testament to your development prowess."]}),"\n",(0,i.jsx)(n.h3,{id:"\ufe0f-further-exploration",children:"\ud83d\udee0\ufe0f Further Exploration"}),"\n",(0,i.jsxs)(n.p,{children:["As you continue your coding adventures, explore the depths of the generated code. Whether it's delving into the intricacies of ",(0,i.jsx)(n.code,{children:"src/index.js"}),", configuring environment variables in ",(0,i.jsx)(n.code,{children:".env"}),", or understanding the protective dance of ",(0,i.jsx)(n.code,{children:"src/config/auth/privateRoute.js"}),", every line of code tells a story of security, creativity, and innovation."]}),"\n",(0,i.jsx)(n.h3,{id:"-beyond-the-horizon",children:"\ud83c\udf10 Beyond the Horizon"}),"\n",(0,i.jsxs)(n.p,{children:["For more insights and documentation, sail over to the ",(0,i.jsx)(n.a,{href:"https://www.wedaa.tech/docs/introduction/what-is-wedaa/",children:(0,i.jsx)(n.strong,{children:"WeDAA Documentation"})})," and explore the GitHub repository at ",(0,i.jsx)(n.a,{href:"https://github.com/wedaa-tech",children:(0,i.jsx)(n.strong,{children:"github.com/wedaa-tech"})}),". Your journey doesn't end here \u2013 it's a launching pad for future projects, collaborations, and secure web development endeavors."]}),"\n",(0,i.jsx)(n.h2,{id:"-ready-set-code",children:"\ud83d\ude80 Ready, Set, Code!"}),"\n",(0,i.jsx)(n.p,{children:"Armed with the knowledge and hands-on experience gained in this blog post, you're now equipped to conquer the world of React security. Start your engines, dive into the code, and let your creativity unfold. Happy coding, and may your React applications always be secure and splendid! \ud83c\udf1f"})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>r});var i=t(7294);const o={},a=i.createContext(o);function r(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);