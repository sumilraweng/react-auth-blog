# React Authentication Blog Rendring

This is React-Nodejs-Express-Mongo project . This Project gives the user to
register itself and logged user can read the blog

This project is made to learn the basic fundamentals of react, react-redux and integrating with backend which is deployed on heroku

### LIST Of API

- Heroku Authentication API LINK :-https://react-auth-backend.herokuapp.com/api/

- Github Authentication Repo :https://github.com/sumilraweng/react-auth-backend
- Heroku Blog Rendring API LINK :- https://blog-app-raweng.herokuapp.com
- Github Blog Rendring Repo :- https://github.com/sumilraweng/blog-rendring-backend

## folder structure

```sh
.
├── package.json
├── package-lock.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── README.md
└── src
    ├── api
    │   ├── auth.js
    │   └── blogs.js
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── assests
    │   └── logo
    │       └── logo.png
    ├── components
    │   ├── Blog
    │   │   ├── blog.module.scss
    │   │   └── index.js
    │   ├── Card
    │   │   ├── card.module.scss
    │   │   └── index.js
    │   ├── common
    │   │   ├── Button
    │   │   │   └── index.js
    │   │   ├── Heading
    │   │   │   └── index.js
    │   │   ├── Image
    │   │   │   └── index.js
    │   │   ├── Input
    │   │   │   └── index.js
    │   │   ├── Label
    │   │   │   └── index.js
    │   │   └── Paragraph
    │   │       └── index.js
    │   ├── Dashboard
    │   │   ├── dashboard.module.scss
    │   │   └── index.js
    │   ├── Login
    │   │   ├── index.js
    │   │   └── signin.module.scss
    │   ├── Navigation
    │   │   ├── index.js
    │   │   └── navigation.module.scss
    │   └── Signup
    │       ├── index.js
    │       └── signup.module.scss
    ├── index.css
    ├── index.js
    ├── logo.svg
    ├── model
    │   ├── errorSchema.js
    │   ├── signinSchema.js
    │   └── signupSchema.js
    ├── pages
    │   ├── AuthenticationSigninPage.js
    │   ├── AuthenticationSignupPage.js
    │   ├── BlogPage.js
    │   ├── HomePage.js
    │   └── Logout.js
    ├── redux
    │   ├── action
    │   │   └── userAction.geneartor.js
    │   ├── constant
    │   │   └── userAction.types.js
    │   ├── reducer
    │   │   ├── auth.reducer.js
    │   │   └── root.reducer.js
    │   └── store
    │       └── store.js
    ├── reportWebVitals.js
    ├── routes
    │   └── router.js
    └── setupTests.js
```

## Installation

Install the dependencies and start the server.

### prerequisite

1. vscode editor
2. node js installed
3. npm installed

### steps

1. > clone this project
2. > go into to the the project folder
3. > open the terminal

4. > open vscode using following command

```sh
$ code .
```

5. > Install the dependencies

```sh
$ npm install

```

6. > run the project

```sh
$ npm run start
```

### Link to server

[React-Auth-Blog-Render-app](https://react-auth-blog.herokuapp.com/blogger/)
