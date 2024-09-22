const path = require('path');
const templatePath = path.resolve(__dirname);
const templates = {
  express: {
    es5: './express/es5.js',
    es6: './express/es6.js',
    ts: './express/ts.ts',
  },
  mongoose: {
    es5: './mongoose/es5.js',
    es6: './mongoose/es6.js',
    ts: './mongoose/ts.ts',
  },
  react: {
    js: './react/js.jsx',
    ts: './react/ts.tsx',
  },
  'react-context': {
    js: './react-context/js.jsx',
    ts: './react-context/ts.tsx',
  },
  jest: {
    js: './jest/js.test.js',
  },
  vue: {
    js: './vuejs/js.vue',
    ts: './vuejs/ts.vue',
  },
  next: {
    ts: './next/ts.tsx',
  },
};

const transformPath = (templates) => {
  const result = {};
  for (const key in { ...templates }) {
    const _templates = templates[key];
    for (const _key in { ..._templates }) {
      result[`${key}/${_key}`] = path.resolve(templatePath, _templates[_key]);
    }
  }
  return result;
};
module.exports = transformPath(templates);
