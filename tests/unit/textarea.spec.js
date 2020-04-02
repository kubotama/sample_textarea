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

  const idTa = "#sampleTextArea";
  it("textareaの存在をテストする。", () => {
    expect(wrapper.find(idTa).exists()).toBeTruthy();
  });

  describe("textareaの初期設定を確認する。", () => {
    it('初期値は""とする。', () => {
      expect(wrapper.find(idTa).element.value).toBe("");
    });

    it("textareaのplaceholderは「変換したい文字列を入力してください」とする。", () => {
      expect(wrapper.find(idTa).element.placeholder).toBe(
        "変換したい文字列を入力してください"
      );
    });
  });
});
