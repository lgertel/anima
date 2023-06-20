<template>
  <article :class="[`text-input-required-1`, className || ``]">
    <div class="x-1 overpass-semi-bold-white-16px-2">
      <span class="span0-1 overpass-semi-bold-white-16px">{{ spanText1 }}</span
      ><span class="span-2 ibmplexsans-normal-pale-sky-16px">&nbsp;</span
      ><span class="span-2 ibmplexsans-normal-white-16px">*</span>
    </div>
    <div class="text-block-1">
      <div class="john-doe-1 valign-text-middle overpass-light-gray-chateau-16px">{{ johnDoe }}</div>
    </div>
  </article>
</template>

<script>
export default {
  name: "TextInputRequired2",
  props: ["spanText1", "johnDoe", "className"],
};
</script>

<style>
.text-input-required-1 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin-top: 19px;
  position: relative;
  width: 429px;
}

.x-1 {
  align-self: stretch;
  letter-spacing: 0.16px;
  line-height: 16px;
  margin-top: -1px;
  position: relative;
}

.span0-1 {
  line-height: 24px;
}

.span-2 {
  line-height: 23px;
}

.text-block-1 {
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

.john-doe-1 {
  align-self: stretch;
  letter-spacing: 0.16px;
  line-height: 24px;
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
}

.text-input-required-1.text-input-required-2 {
  height: 237px;
  margin-top: 21px;
}

.text-input-required-1.text-input-required-2 .john-doe-1 {
  white-space: unset;
}
</style>
