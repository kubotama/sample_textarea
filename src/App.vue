<template>
  <v-app>
    <v-content>
      <SampleTextArea />
    </v-content>
  </v-app>
</template>

<script>
import SampleTextArea from "./components/SampleTextArea";

export default {
  name: "App",

  components: {
    SampleTextArea
  },

  data: () => ({
    //
  })
};
</script>
