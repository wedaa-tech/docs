---
title: Securing React applications with Keycloak
description: Intergating Keycloak with React app with "react-oidc-context"
image: https://i.imgur.com/jtapJ0a.png
tags: [keycloak, react, authentication, prototyping, boilerplate]
date: 2023-12-26
---

In the fast-paced world of web development, prioritizing the security of our applications is paramount. This blog post takes you on a journey to enhance the security of your React app by seamlessly integrating it with [**Keycloak**](https://www.keycloak.org/documentation), a robust authentication and authorization server. To simplify this process, we'll leverage the npm package [**react-oidc-context**](https://www.npmjs.com/package/react-oidc-context), bridging React and Keycloak while implementing OpenID Connect (OIDC). Whether you're a seasoned developer or just stepping into React and authentication, this post provides practical insights to bolster the security posture of your web application. Let's dive into the world of React, Keycloak, and react-oidc-context for a more secure development experience.

### 🚀 Quickstart:

1. Visit [**app.wedaa.tech**](https://app.wedaa.tech/)

2. Click on the "Static Web page" component

   ![Choose Framework](https://i.imgur.com/aCPQE39.png)

3. Select a frontend framework: React, then click next

   ![Choose React](https://i.imgur.com/ROlem4b.png)

4. Choose Authentication and Authorization: Keycloak, then click Next 

   ![Choose Keycloak](https://i.imgur.com/3dX4Ttc.png)

5. Review your project composition and confirm by clicking "Go to Canvas"

   ![Review Composition](https://i.imgur.com/KNTDOUt.png)

6. Provide a valid name to your prototype and click on "Validate"

   ![Prototype Validation](https://i.imgur.com/FVw7YEp.png)

7. Review your prototype configuration, then click Next

   ![Prototype Configuration](https://i.imgur.com/NYlY6pF.png)

8. Finally, click "Generate Code" to download the secured React application

   ![Generate Code](https://i.imgur.com/kJiRTHB.png)



WeDAA offers a pre-configured React application secured by Keycloak. Simply extract our application, follow the instructions in the README, and initiate your application to seamlessly experience it firsthand.

### 🧠 Understanding the Generated Code 

1. src/index.js

```jsx
// Code for initializing React application with authentication and authorization capabilities.
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from 'react-oidc-context';

const oidcConfig = {
  authority: process.env.REACT_APP_OIDC_AUTHORITY,
  client_id: process.env.REACT_APP_OIDC_CLIENT_ID,
  redirect_uri: process.env.REACT_APP_PROJECT_URL,
  // ...
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider {...oidcConfig}>
    <App />
  </AuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

```

- This code initializes a React application with authentication and authorization capabilities using the [**react-oidc-context**](https://www.npmjs.com/package/react-oidc-context) library.

- The main application (App) is wrapped in an AuthProvider with configurations derived from the OIDC parameters specified in the oidcConfig object.

- The oidcConfig object contains configuration parameters required for OpenID Connect authentication.

- Environment variables (REACT_APP_OIDC_AUTHORITY, REACT_APP_OIDC_CLIENT_ID, and REACT_APP_PROJECT_URL) are used to dynamically set these values.

2. .env

```jsx
// Environment variables for configuring the React application.
PORT=4200
GENERATE_SOURCEMAP=false

REACT_APP_PROJECT_NAME=webapp
REACT_APP_PROJECT_URL=http://localhost:4200


# WEDAA 
REACT_APP_WEDAA_DOCS=https://wedaa-tech.github.io
REACT_APP_WEDAA_GITHUB=https://github.com/wedaa-tech

# OIDC Configuration
REACT_APP_OIDC_AUTHORITY=http://localhost:9080/realms/jhipster
REACT_APP_OIDC_CLIENT_ID=web_app

```

3. src/config/auth/privateRoute.js

```jsx
// Code for defining a PrivateRoute component for protecting routes based on authentication status.
import React from 'react';
import { useAuth } from 'react-oidc-context';

const PrivateRoute = ({ children }) => {
  const auth = useAuth();

  switch (auth.activeNavigator) {
    case 'signinSilent':
      return <div>Signing you in...</div>;
    case 'signoutRedirect':
      return <div>Signing you out...</div>;
  }

  if (auth.isLoading) {
    // <div>Loading...</div>;
    return <div></div>;
  }

  if (auth.error) {
    return <div>Oops... {auth.error.message}</div>;
  }
  if (!auth.isAuthenticated) {
    let originPath = window.location.pathname;
    auth.signinRedirect({
      redirect_uri: process.env.REACT_APP_PROJECT_URL.concat(originPath),
    });
  }

  if (auth.isAuthenticated) {
    window.history.replaceState({}, document.title, window.location.pathname);
    return <>{children}</>;
  }
};

export default PrivateRoute;

```

- This code defines a React component called PrivateRoute that serves as a wrapper for protecting certain routes in your application based on authentication status. 

- The PrivateRoute component takes a children prop, which represents the content that should be rendered if the user is authenticated.

- Switch statement checks the activeNavigator property in the authentication context. If the user is in the process of a silent sign-in or sign-out redirect, it displays a corresponding message.

- If the authentication context is still loading, the component returns an empty div (essentially doing nothing until authentication data is available).

- If the user is not authenticated, it initiates a redirection to the authentication server using the signinRedirect method. It also captures the current path to redirect the user back to the intended page after authentication.

- If the user is authenticated, it updates the browser history to remove sensitive information and renders the original children content.

4. docker/

```
|_docker
    |_realm-config
            |_jhipster-realm.json
    |_keycloak.yml
```

- The Docker directory houses a Docker Compose configuration for Keycloak. This configuration initiates a Keycloak container that serves as the authentication server for our React application.

- Within the docker/realm-config directory, there is a JSON-formatted realm configuration. This information, presented in JSON format, is essential for our React application as it serves as the OIDC (OpenID Connect) configuration.


### 🚦 Getting Started

1. Start the keycloak server
```
npm run docker:keycloak:up
```

2. Install dependencies for the first time.
```
npm install
```

3. Start you React application
```
npm start
```

### 📸 Example images in action

1. Home page of the React application generated via WeDAA.

   ![Home page](https://i.imgur.com/WPwAEL9.png)

2. Login Page for the React application powered by keycloak (click on the sign in button to land on this page, by default two users are provided [user,admin]; password is same as username).

   ![Login Page](https://i.imgur.com/betJU5z.png)

3. Home page after sucessful Login.

   ![Logged In Home page](https://i.imgur.com/RuRXzHs.png)

## ✨ Conclusion

Congratulations! 🎉 You've successfully navigated the realm of securing your React applications with the formidable duo of Keycloak and `react-oidc-context`. As you embark on your coding journey, armed with a fortified understanding of authentication and authorization, here's a recap of your key accomplishments:

- Seamlessly integrated Keycloak as the authentication and authorization powerhouse.
- Leveraged the elegance of `react-oidc-context` to bridge the realms of React and OpenID Connect.
- Initiated a secure React application that not only prioritizes user experience but also champions data protection.

### 🚀 Quick Dive

Before you go, let's take one last glance at the live example you've created. Head over to [**app.wedaa.tech**](https://app.wedaa.tech/) and witness your React application in action. From dynamic prototyping to authentication magic, your creation stands as a testament to your development prowess.

### 🛠️ Further Exploration

As you continue your coding adventures, explore the depths of the generated code. Whether it's delving into the intricacies of `src/index.js`, configuring environment variables in `.env`, or understanding the protective dance of `src/config/auth/privateRoute.js`, every line of code tells a story of security, creativity, and innovation.

### 🌐 Beyond the Horizon

For more insights and documentation, sail over to the [**WeDAA Documentation**](https://www.wedaa.tech/docs/introduction/what-is-wedaa/) and explore the GitHub repository at [**github.com/wedaa-tech**](https://github.com/wedaa-tech). Your journey doesn't end here – it's a launching pad for future projects, collaborations, and secure web development endeavors.

## 🚀 Ready, Set, Code!

Armed with the knowledge and hands-on experience gained in this blog post, you're now equipped to conquer the world of React security. Start your engines, dive into the code, and let your creativity unfold. Happy coding, and may your React applications always be secure and splendid! 🌟
