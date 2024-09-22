#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const templates = require('./templates');
const capitalizeFirstLetter = require('./libs/capitalizeFirstLetter');
const { FgRed, FgGreen } = require('./libs/color');
const inquirer = require('inquirer').default;
const filenameConfig = 'codegen.config.json';

function readConfig() {
  const configPath = path.resolve(process.cwd(), filenameConfig);
  const _config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));
  return _config;
}

const customConfig = readConfig();

if (!customConfig) {
  console.log(FgRed, `File ${filenameConfig} not found`);
  throw new Error(`File ${filenameConfig} not found`);
}

const replacer = (str, replaceConfig) => {
  let result = str;
  for (const key in replaceConfig) {
    result = result.replace(new RegExp(`__${key}__`, 'g'), replaceConfig[key]);
  }
  return result;
};

inquirer
  .prompt([
    {
      name: 'type',
      type: 'list',
      message: 'Select type: ',
      choices: [
        { name: 'Use custom config', value: 'use' },
        { name: 'List Templates', value: 'list' },
      ],
    },
  ])
  .then(({ type }) => {
    switch (type) {
      case 'use':
        promptUseCustomConfig();
        break;
      case 'list':
        inquirer
          .prompt([
            {
              name: 'config',
              type: 'list',
              choices: Object.keys(templates).map((key) => {
                return {
                  name: key,
                  value: key,
                };
              }),
            },
          ])
          .then(({ config }) => {
            console.log(FgGreen, JSON.stringify(customConfig[config], null, 2));
          });
        break;
    }
  });

const promptUseCustomConfig = () => {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'config',
        message: 'Enter your custom config: ',
        choices: Object.keys(customConfig).map((key) => {
          return {
            name: `${key} (${Object.keys(customConfig[key]).join(', ')})`,
            value: key,
          };
        }),
      },
      {
        type: 'input',
        name: 'name',
        message: 'Enter name: ',
        validate: (value) => {
          if (value.length) {
            return true;
          } else {
            return 'Please enter name!';
          }
        },
      },
    ])
    .then((answers) => {
      const config = answers.config;
      const name = answers.name.charAt(0).toLowerCase() + answers.name.slice(1);
      const Name = name.charAt(0).toUpperCase() + name.slice(1);
      const _customConfig = customConfig[config];
      const data = [];
      for (const subCustomConfig in _customConfig) {
        const item = _customConfig[subCustomConfig];
        const replaceConfig = {
          Name,
          name,
        };

        const fileContent = replacer(
          templates[item.template]
            ? fs.readFileSync(templates[item.template], 'utf-8')
            : '',
          replaceConfig
        );

        const filename = replacer(item.filename, replaceConfig);

        const folder = replacer(item.folder, replaceConfig);

        const fullPath = path.resolve(folder, filename);

        if (!fs.existsSync(folder)) {
          fs.mkdirSync(folder, { recursive: true });
        }

        if (fs.existsSync(fullPath)) {
          console.log(FgRed, `File ${filename} already exists`);
          return;
        }

        data.push({
          filename,
          folder,
          fullPath,
          fileContent,
        });
      }

      for (const item of data) {
        fs.writeFileSync(item.fullPath, item.fileContent, {
          encoding: 'utf-8',
        });
        console.log(FgGreen, `File ${item.filename} created successfully`);
      }
    });
};
