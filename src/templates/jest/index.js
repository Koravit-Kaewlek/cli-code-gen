function generate({ name, Name }, self, feature, config) {
  return `
describe('example jest function', () => {
  testa('should be int', async () => {
    expect(4 * 10).toEqual(40);
  });
});
`;
}
module.exports = { generate };
