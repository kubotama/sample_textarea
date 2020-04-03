<template>
  <div>
    <textarea
      id="sampleTextArea"
      v-model="sampleText"
      placeholder="変換したい文字列を入力してください"
      rows="10"
      cols="50"
    ></textarea>
  </div>
</template>

<script>
export default {
  name: "SampleTextArea",
  data() {
    return {
      sampleText: ""
    };
  }
};
</script>
