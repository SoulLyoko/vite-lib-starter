import { mount } from "@vue/test-utils";
import { nextTick } from "vue-demi";
import { HelloWorld } from "~/index";

describe("HelloWorld", () => {
  it("should mount", async () => {
    const wrapper = mount(HelloWorld);
    await nextTick();
    expect(wrapper.html()).toBe("<h1>Hello World</h1>");
  });
});
