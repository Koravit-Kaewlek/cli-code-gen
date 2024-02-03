function generate({ name }, self, feature, config) {
  return `
function ${name}() {
  return;
}

export default ${name};
`;
}
module.exports = { generate };
