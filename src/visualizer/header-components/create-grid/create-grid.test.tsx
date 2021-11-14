import { Provider } from "react-redux";
import { mount } from "enzyme";
import { store } from "../../../store";
import { findByTestAttribute } from "../../helpers/test-helpers";

import { CreateGrid } from "./create-grid-presentational";

describe("Create Grid Component", () => {
  const setUp = () => {
    const component = mount(
      <Provider store={store}>
        <CreateGrid />
      </Provider>
    );
    return component;
  };

  let wrapper: any;
  beforeEach(() => {
    wrapper = setUp();
  });

  describe("Renders Component", () => {
    it("should render the component", () => {
      const component = findByTestAttribute(wrapper, "create-grid").at(1);
      expect(component.length).toBe(1);
    });

    it("should render the label", () => {
      const component = findByTestAttribute(wrapper, "create-grid-label");
      expect(component.length).toBe(1);
    });

    it("should render the input", () => {
      const component = findByTestAttribute(wrapper, "create-grid-input");
      expect(component.length).toBe(1);
    });
  });

  describe("Functionality", () => {
    it("should not accept a non-number value", () => {
      const component = findByTestAttribute(wrapper, "create-grid-input");
      expect(component.props().type).toBe("number");
    });

    it("should be able to update value", () => {
      const input = findByTestAttribute(wrapper, "create-grid-input");
      input.props().value = 100;
      expect(input.props().value).toBe(100);
    });
  });
});
