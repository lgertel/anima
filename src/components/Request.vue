<template>
  <div :class="[`request-1`, className || ``]">
    <div class="contained-default-1">
      <div class="label-2 valign-text-middle overpass-bold-white-18px">Request Prototype</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Request",
  props: ["className"],
};
</script>

<style>
.request-1 {
  align-items: center;
  align-self: center;
  display: flex;
  gap: 24px;
  position: relative;
  width: fit-content;
}

.contained-default-1 {
  align-items: center;
  background-color: var(--azure-radiance);
  border-radius: 8px;
  display: flex;
  padding: 12px 18px;
  position: relative;
  width: fit-content;
}

.label-2 {
  letter-spacing: 0.3px;
  line-height: 18px;
  margin-top: -1px;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
}

.request-1.request-2 {
  align-self: unset;
  left: 1008px;
  position: absolute;
  top: 1750px;
}
</style>
