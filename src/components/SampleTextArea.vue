<template>
  <div>
    <textarea
      id="sampleTextArea"
      placeholder="変換したい文字列を入力してください"
      rows="10"
      cols="50"
    ></textarea>
  </div>
</template>

<script>
export default {
  name: "SampleTextArea"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
