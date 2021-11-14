import { Provider } from "react-redux";
import { mount } from "enzyme";
import { store } from "../../../store";
import { findByTestAttribute } from "../../helpers/test-helpers";

import { Header } from "./header-presentational";

describe("Header Components", () => {
  const setUp = (props = {}) => {
    const component = mount(
      <Provider store={store}>
        <Header {...props} />
      </Provider>
    );
    return component;
  };

  let wrapper: any;
  beforeEach(() => {
    wrapper = setUp();
  });

  describe("Renders Component", () => {
    it("should render the head component", () => {
      const component = findByTestAttribute(wrapper, "head").at(1);
      expect(component.length).toBe(1);
    });

    it("should render the subhead component", () => {
      const component = findByTestAttribute(wrapper, "subhead").at(1);
      expect(component.length).toBe(1);
    });

    it("should render the algorithm type selector component", () => {
      const component = findByTestAttribute(
        wrapper,
        "algorithm-type-selector"
      ).at(1);
      expect(component.length).toBe(1);
    });

    it("should render the algorithm selector component", () => {
      const component = findByTestAttribute(wrapper, "algorithm-selector").at(
        1
      );
      expect(component.length).toBe(1);
    });

    it("should render the algorithm visualizer button", () => {
      const component = findByTestAttribute(wrapper, "visualizer-button").at(1);
      expect(component.length).toBe(1);
    });

    it("should render the create grid component", () => {
      const component = findByTestAttribute(wrapper, "create-grid").at(1);
      expect(component.length).toBe(1);
    });

    it("should render the complexity component", () => {
      const component = findByTestAttribute(wrapper, "complexity");
      expect(component.length).toBe(1);
    });
  });

  describe("Updates Components:", () => {
    it("starts with 'visualize'", () => {
      const component = findByTestAttribute(wrapper, "visualizer-button").at(1);
      expect(component.text()).toBe("visualize");
    });
  });
});
