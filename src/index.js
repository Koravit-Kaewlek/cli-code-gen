#!/usr/bin/env node
const { program } = require('commander');
const fs = require('fs');
const path = require('path');
const packageJson = require('../package.json');
const templates = require('./templates');
const capitalizeFirstLetter = require('./libs/capitalizeFirstLetter');
const { FgRed, FgGreen } = require('./libs/color');
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
    .description('this is cli code generator');

  program
    .command('g <configName> <name>')
    .description('generate files')
    .action((configName, name) => {
      if (!config[configName]) {
        console.log(FgRed, `not found ${configName} in ${filenameConfig}`);
        return;
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

        data[type] = _data;
      }

      for (const type in data) {
        const item = data[type];
        if (fs.existsSync(item.fullPath)) {
          console.log(FgRed, `you already have location: ${item.fullPath}`);
          continue;
        }
        fs.writeFileSync(
          item.fullPath,
          templates[item.template].generate(
            { name, Name },
            data[type],
            data,
            config
          )
        );
        console.log(
          FgGreen,
          `file have been successfully generated location: ${item.fullPath}`
        );
      }
    });
  program.parse(process.argv);
}

initCommands(readConfig());
