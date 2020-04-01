import { shallowMount } from "@vue/test-utils";
import SampleTextArea from "@/components/SampleTextArea.vue";

describe("SampleTextAreaコンポーネント", () => {
  it("vueコンポーネントである。", () => {
    const wrapper = shallowMount(SampleTextArea);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  it("コンポーネント上に要素が存在しない。", () => {
    const wrapper = shallowMount(SampleTextArea);
    expect(wrapper.isEmpty()).toBeTruthy();
  });
});
