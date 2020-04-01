<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <SampleTextArea msg="Welcome to Your Vue.js App" />
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
