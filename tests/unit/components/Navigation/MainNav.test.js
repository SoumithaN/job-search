import { shallowMount } from "@vue/test-utils";

import MainNav from "@/components/Navigation/MainNav";
describe("MainNav", () => {
  it("displays the company name", () => {
    const wrapper = shallowMount(MainNav);
    expect(wrapper.text()).toMatch("Bright Career");
  });
  it("displays menu items for navigation", () => {
    const wrapper = shallowMount(MainNav);
    const navigationMenuItems = wrapper.findAll(
      "[data-test = 'main-nav-list-item']"
    );
    const navigationMenuTexts = navigationMenuItems.map((item) => item.text());
    expect(navigationMenuTexts).toEqual([
      "Teams",
      "Locations",
      "Life at Bright",
      "How we hire",
      "Students",
      "Jobs",
    ]);
  });
  describe("When user is logged out", () => {
    it("prompts user to sign in", () => {
      const wrapper = shallowMount(MainNav);
      const loginButton = wrapper.find("[data-test='login-button']");
      expect(loginButton.exists()).toBe(true);
    });
  });
  describe("when user is logs in", () => {
    it("displays user profile picture", async () => {
      const wrapper = shallowMount(MainNav);
      let profileImage = wrapper.find("[data-test='profile-image']");
      expect(profileImage.exists()).toBe(false);
      const loginButton = wrapper.find("[data-test = 'login-button']");
      await loginButton.trigger("click");
      profileImage = wrapper.find("[data-test='profile-image']");
      expect(profileImage.exists()).toBe(true);
    });
    it("displays subnav with additional information", async () => {
      const wrapper = shallowMount(MainNav);
      let subnav = wrapper.find("[data-test = 'subnav']");
      expect(subnav.exists()).toBe(false);
      const loginButton = wrapper.find("[data-test = 'login-button']");
      await loginButton.trigger("click");
      subnav = wrapper.find("[data-test ='subnav']");
      expect(subnav.exists()).toBe(true);
    });
  });
});
