
function generate({ name }, self, feature, config) {
  return `
<script setup>
defineProps({});
</script>

<template>${name}</template>

<style scoped></style>
`;
}
module.exports = { generate };
