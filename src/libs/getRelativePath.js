const path = require('path');
module.exports = function getRelativePath(config, fullPath) {
  const projectRoot = path.resolve(
    process.cwd(),
    path.dirname(config.configPath)
  );
  const relativePath = path.relative(projectRoot, fullPath);
  return relativePath.replace(/\\/g, '/'); // Convert backslashes to forward slashes
};
