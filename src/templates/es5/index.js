function generate({ name }, self) {
  return `
function ${name}() {
  return;
}

module.exports = ${name};
`;
}
module.exports = { generate };
