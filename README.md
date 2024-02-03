# Cli code generator

---

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
```

Create a file named `codegen.config.json` in the root of your project.
If you need to capitalize the first letter, just use **{Name}**

```json
//codegen.config.json
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
│ ├── hooks
│ │ ├── useAuth.jsx
│ ├── pages
│ │ ├── Home
│ │ │ ├── Home.jsx
│ │ ├── Login
│ │ │ ├── Login.jsx
│ ├── App.jsx
│ ├── main.jsx
```

---

###Available Templates

- es5
- es6
- express
- jest
- mongoose
- reactjs
- reactjs-hook
