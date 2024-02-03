#!/usr/bin/env node
const { program } = require('commander');
const fs = require('fs');
const path = require('path');
const packageJson = require('../package.json');
const templates = require('./templates');
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
    .description('A simple CLI application built with Node.js');

  program
    .command('feature <name>')
    .description('generate feature files')
    .action((name) => {
      if (!config.structure) {
        throw new Error(`Not Found structure in ${filenameConfig}`);
      }

      const structure = {};
      for (const type in config.structure) {
        const _structure = config.structure[type];
        _structure.type = type;
        _structure.path = _structure.path.replace('{name}', name);
        _structure.filename = _structure.filename.replace('{name}', name);
        _structure.fullPath = `${_structure.path}/${_structure.filename}`;
        if (!fs.existsSync(_structure.path)) {
          fs.mkdirSync(_structure.path, { recursive: true });
        }

        structure[type] = _structure;
      }

      for (const type in structure) {
        const item = structure[type];
        fs.writeFileSync(
          item.fullPath,
          templates[item.template].generate(
            { name },
            structure[type],
            structure,
            config
          )
        );
      }
    });
  program.parse(process.argv);
}

initCommands(readConfig());
