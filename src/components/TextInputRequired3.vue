<template>
  <article class="text-input-required-3">
    <div class="x-3 overpass-semi-bold-white-16px">{{ K1fHRH }}</div>
    <text-block :name="textBlockProps.name" />
  </article>
</template>

<script>
import TextBlock from "./TextBlock";
export default {
  name: "TextInputRequired3",
  components: {
    TextBlock,
  },
  props: ["K1fHRH", "textBlockProps"],
};
</script>

<style>
.text-input-required-3 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin-top: 21px;
  position: relative;
  width: 429px;
}

.x-3 {
  align-self: stretch;
  letter-spacing: 0.16px;
  line-height: 24px;
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
}
</style>
