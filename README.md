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
If you need to capitalize the first letter, just use **__Name__**

`codegen.config.json`

```json
{
  "create-react-feature": {
    "page": {
      "folder": "./src/pages/__Name__",
      "filename": "__Name__.jsx",
      "template": "react/js"
    }
  }
}
```

---

## 3. Run command

```bash
codegen
```

**Project Structure After Running the Command**

```
project-root
├── codegen.config.json
├── src
│ ├── custom
│ │ └── ...
│ ├── hooks
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
  "create-express-feature": {
    "model": {
      "folder": "./src/models",
      "filename": "__name__.model.js",
      "template": "mongoose/es5"
    },
    "controller": {
      "folder": "./src/controllers",
      "filename": "__name__.controller.js"
    },
    "controller-test": {
      "folder": "./src/tests/controllers",
      "filename": "__name__.controller.test.js",
      "template": "jest/js"
    },
    "route": {
      "folder": "./src/routes",
      "filename": "__name__.route.js",
      "template": "express/es5"
    }
  }
}
```

Run Command.

```bash
codegen
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

Template: no template
**./src/controllers/admin.controller.js**
```js
// empty content
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

adminRouter.post('/', function (req, res, next) {
  const body = req.body;
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
| express/es5          | Express.js Router (CRUD) ES5 (JavaScript)             |
| express/es6          | Express.js Router (CRUD) ES6 (JavaScript)             |
| express/ts    | Express.js Router (CRUD) (Typescript)             |
| jest/js         | Jest (JavaScript testing)             |
| mongoose/es5     | Mongoose (MongoDB ODM)  (JavaScript)              |
| mongoose/es6     | Mongoose (MongoDB ODM)  (JavaScript)              |
| mongoose/ts     | Mongoose (MongoDB ODM)  (Typescript)              |
| react/js      | React.js (JavaScript)         |
| react/ts      | React.js (Typescript)         |
| react-context/js | React.js Context (JavaScript) |
| react-context/ts | React.js Context (Typescript) |
| vue/js        | Vue.js (Vue3)                         |
