import { shallowMount } from "@vue/test-utils";
import SampleTextArea from "@/components/SampleTextArea.vue";

describe("SampleTextAreaコンポーネント", () => {
  const idTa = "#sampleTextArea";
  let wrapper;
  let elTa;

  beforeEach(() => {
    wrapper = shallowMount(SampleTextArea);
    elTa = wrapper.find(idTa).element;
  });
  it("vueコンポーネントである。", () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  it("textareaの存在をテストする。", () => {
    expect(wrapper.find(idTa).exists()).toBeTruthy();
  });

  describe("textareaの初期設定を確認する。", () => {
    it('初期値は""とする。', () => {
      expect(elTa.value).toBe("");
    });

    it("textareaのplaceholderは「変換したい文字列を入力してください」とする。", () => {
      expect(elTa.placeholder).toBe("変換したい文字列を入力してください");
    });
  });
});
