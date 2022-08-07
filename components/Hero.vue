<template>
  <div>
    <div id="p5Canvas"></div>
  </div>
</template>

<script>
let p5script;
if (process.browser) {
  p5script = require("./p5Header.js");
}
export default {
  mounted() {
    const P5 = require("p5");

    new P5(p5script.main);
    p5script.setDelegate(this.callbackOnP5);
  },
};
</script>

<style>
</style>