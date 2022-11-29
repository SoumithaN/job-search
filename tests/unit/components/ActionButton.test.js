import { mount } from "@vue/test-utils";
import ActionButton from "@/components/ActionButton";

describe("ActionButton", () => {
  it("displays text", () => {
    const wrapper = mount(ActionButton, {
      props: {
        text: "I'am clickable",
        type: "primary",
      },
    });
    expect(wrapper.text()).toMatch("I'am clickable");
  }),
    it("applies one of the CSS styles to a button", () => {
      const wrapper = mount(ActionButton, {
        props: {
          text: "I'm clickable",
          type: "primary",
        },
      });
      const button = wrapper.find("button");
      expect(button.classes("primary")).toBe(true);
    });
});
