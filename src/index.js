#!/usr/bin/env node
const { program } = require('commander');
const fs = require('fs');
const path = require('path');
const packageJson = require('../package.json');
const templates = require('./templates');
const capitalizeFirstLetter = require('./libs/capitalizeFirstLetter');
const filenameConfig = 'codegen.config.json';
function readConfig() {
  const configPath = path.resolve(process.cwd(), filenameConfig);
  const _config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));
  _config.configPath = configPath;
  return _config;
}

function initCommands(config) {
  program
    .version(packageJson.version)
    .description('This is cli code generator');

  program
    .command('g <configName> <name>')
    .description('generate files')
    .action((configName, name) => {
      if (!config[configName]) {
        throw new Error(`Not Found ${configName} in ${filenameConfig}`);
      }

      const Name = capitalizeFirstLetter(name);
      const data = {};
      for (const type in config[configName]) {
        const _data = config[configName][type];
        _data.type = type;
        _data.path = _data.path.replace('{name}', name).replace('{Name}', Name);
        _data.filename = _data.filename
          .replace('{name}', name)
          .replace('{Name}', Name);
        _data.fullPath = `${_data.path}/${_data.filename}`;
        if (!fs.existsSync(_data.path)) {
          fs.mkdirSync(_data.path, { recursive: true });
        }

        if (fs.existsSync(_data.fullPath)) {
          throw new Error(`You Have Already Filename ${_data.filename}`);
        }
        data[type] = _data;
      }

      for (const type in data) {
        const item = data[type];
        fs.writeFileSync(
          item.fullPath,
          templates[item.template].generate(
            { name, Name },
            data[type],
            data,
            config
          )
        );
      }
    });
  program.parse(process.argv);
}

initCommands(readConfig());
