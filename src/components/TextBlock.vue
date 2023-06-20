<template>
  <div class="text-block">
    <div class="name valign-text-middle ibmplexsans-normal-gray-chateau-16px">{{ name }}</div>
  </div>
</template>

<script>
export default {
  name: "TextBlock",
  props: ["name"],
};
</script>

<style>
.text-block {
  align-items: flex-start;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 12px;
  position: relative;
}

.name,
.john-doe {
  align-self: stretch;
  letter-spacing: 0.16px;
  line-height: 23px;
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
}
</style>
