import { shallowMount } from "@vue/test-utils";
import SampleTextArea from "@/components/SampleTextArea.vue";

describe("SampleTextAreaコンポーネント", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(SampleTextArea);
  });
  it("vueコンポーネントである。", () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  it("コンポーネント上に要素が存在しない。", () => {
    expect(wrapper.isEmpty()).toBeTruthy();
  });
});
