<template>
  <article class="text-input-required">
    <div class="x overpass-semi-bold-white-16px-2">
      <span class="span0 overpass-semi-bold-white-16px">{{ spanText1 }}</span
      ><span class="span-1 ibmplexsans-normal-pale-sky-16px">{{ spanText2 }}</span
      ><span class="span-1 ibmplexsans-normal-white-16px">{{ spanText3 }}</span>
    </div>
    <text-block :name="textBlockProps.name" />
  </article>
</template>

<script>
import TextBlock from "./TextBlock";
export default {
  name: "TextInputRequired",
  components: {
    TextBlock,
  },
  props: ["spanText1", "spanText2", "spanText3", "textBlockProps"],
};
</script>

<style>
.text-input-required {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 2px;
  position: relative;
  width: 429px;
}

.x {
  align-self: stretch;
  letter-spacing: 0.16px;
  line-height: 16px;
  margin-top: -1px;
  position: relative;
}

.span0 {
  line-height: 24px;
}

.span-1 {
  line-height: 23px;
}
</style>
