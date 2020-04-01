<template>
  <div id="app">
    <SampleTextArea />
  </div>
</template>

<script>
import SampleTextArea from "./components/SampleTextArea.vue";

export default {
  name: "App",
  components: {
    SampleTextArea
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
