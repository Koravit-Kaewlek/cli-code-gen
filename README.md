# Cli code generator

## 1. Install the Package

```bash
npm install -g @koravit258/cli-code-gen
```

---

## 2. Create Config File

Example **ReactJS** Project Structure

```
project-root
├── codegen.config.json
├── src
│ ├── hooks
│ └── ...
│ ├── pages
│ └── ...
│ ├── App.jsx
│ ├── main.jsx
│ └── ...
└── ...
```

Create a file named `codegen.config.json` in the root of your project.
If you need to capitalize the first letter, just use **{Name}**

`codegen.config.json`

```json
{
  "feature": {
    "page": {
      "path": "./src/pages/{Name}",
      "filename": "{Name}.jsx",
      "template": "reactjs"
    }
  },
  "hook": {
    "test": {
      "path": "./src/hooks",
      "filename": "use{Name}.jsx",
      "template": "reactjs-hook"
    }
  },
  "custom": {
    "lib": {
      "path": "./src/custom",
      "filename": "{name}.custom.js",
      "template": "es6"
    }
  }
}
```

---

## 3. Run command

```bash
codegen g <configName> <name>
```

```bash
codegen g feature home
codegen g feature login
codegen g hook auth
codegen g custom getCookie
```

**Project Structure After Running the Command**

```
project-root
├── codegen.config.json
├── src
│ ├── custom
│ │ ├── getCookie.custom.js
│ │ └── ...
│ ├── hooks
│ │ ├── useAuth.jsx
│ │ └── ...
│ ├── pages
│ │ ├── Home
│ │ │ ├── Home.jsx
│ │ │ └── ...
│ │ ├── Login
│ │ │ ├── Login.jsx
│ │ │ └── ...
│ ├── App.jsx
│ ├── main.jsx
│ └── ...
└── ...
```

---

### More Example

Example **ExpressJS** Project Structure.

```
project-root
├── codegen.config.json
├── src
│ ├── controllers
│ │ └── ...
│ ├── models
│ │ └── ...
│ ├── routes
│ │ └── ...
│ ├── app.js
│ └── ...
└── ...
```

Use Config `codegen.config.json`

```json
{
  "feature": {
    "model": {
      "path": "./src/models",
      "filename": "{name}.model.js",
      "template": "mongoose"
    },
    "controller": {
      "path": "./src/controllers",
      "filename": "{name}.controller.js",
      "template": "es5"
    },
    "controller-test": {
      "path": "./src/tests/controllers",
      "filename": "{name}.controller.test.js",
      "template": "jest"
    },
    "route": {
      "path": "./src/routes",
      "filename": "{name}.route.js",
      "template": "expressjs"
    }
  }
}
```

Run Command.

```bash
codegen g feature admin
```

Project Structure After Running the Command

```
project-root
├── codegen.config.json
├── src
│ ├── controllers
│ │ ├── admin.controller.js
│ │ └── ...
│ ├── models
│ │ ├── admin.model.js
│ │ └── ...
│ ├── routes
│ │ ├── admin.route.js
│ │ └── ...
│ ├── tests
│ │ ├── controllers
│ │ │ ├── admin.controller.test.js
│ │ │ └── ...
│ │ └── ...
│ ├── app.js
│ └── ...
└── ...
```

#### Files

Template: **es5**
**./src/controllers/admin.controller.js**
```js
function admin() {
  return;
}

module.exports = admin;
```

Template: **mongoose**
**./src/models/admin.model.js**
```js
const mongoose = require('mongoose');
const { Schema } = mongoose;

const adminSchema = new Schema({}, { timestamps: true });

const AdminModel = mongoose.model('admin', adminSchema, 'admin');

module.exports = AdminModel;
```

Template: **expressjs**
**./src/routes/admin.route.js**
```js
const express = require('express');

const adminRouter = express.Router();

adminRouter.get('/', function (req, res, next) {
  res.status(200).send({ data: 'ok' });
});

adminRouter.get('/:id', function (req, res, next) {
  const { id } = req.params;
  res.status(200).send({ data: id });
});

adminRouter.post('/', function(req, res, next) {
  const body = req.body
  res.status(200).send({ data: body });
});

adminRouter.put('/:id', function (req, res, next) {
  const { id } = req.params;
  res.status(200).send({ data: id });
});

adminRouter.delete('/:id', function (req, res, next) {
  const { id } = req.params;
  res.status(200).send({ data: id });
});

module.exports = adminRouter;
```

Template: **jest**
**./src/tests/controllers/admin.controller.test.js**

```js
describe('example jest function', () => {
  testa('should be int', async () => {
    expect(4 * 10).toEqual(40);
  });
});
```

---

### Available Templates

| Template     | Description                           |
| ------------ | ------------------------------------- |
| es5          | ECMAScript 5 (JavaScript)             |
| es6          | ECMAScript 6 (JavaScript)             |
| expressjs    | Express.js Router (CRUD)              |
| jest         | Jest (JavaScript testing)             |
| mongoose     | Mongoose (MongoDB ODM)                |
| reactjs      | React.js (JavaScript library)         |
| reactjs-hook | React.js Hooks (Have context in file) |
