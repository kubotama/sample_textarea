import { shallowMount } from "@vue/test-utils";
import SampleTextArea from "@/components/SampleTextArea.vue";

describe("SampleTextAreaコンポーネント", () => {
  it("vueコンポーネントである。", () => {
    const wrapper = shallowMount(SampleTextArea);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
