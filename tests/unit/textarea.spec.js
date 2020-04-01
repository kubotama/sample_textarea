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

  it.skip("コンポーネント上に要素が存在しない。", () => {
    expect(wrapper.isEmpty()).toBeTruthy();
  });

  it("textareaの存在をテストする。", () => {
    expect(wrapper.find("#sampleTextArea").exists()).toBeTruthy();
  });
});
