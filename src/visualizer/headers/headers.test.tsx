import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";
import { shallow, configure } from "enzyme";
import { findByTestAttribute } from "../helpers/helpers";

import { AlgorithmSelector } from "./algorithm-selector";
import { AlgorithmTypeSelector } from "./algorithm-type-selector";

configure({ adapter: new EnzymeAdapter() });

describe("Header Components", () => {
  describe("Algorithm Selector Component", () => {
    const setUp = (props = {}) => {
      const component = shallow(<AlgorithmSelector {...props} />);
      return component;
    };

    let wrapper: any;
    beforeEach(() => {
      wrapper = setUp();
    });

    it("should render the component", () => {
      const component = findByTestAttribute(wrapper, "algorithm-selector");
      expect(component.length).toBe(1);
    });

    it("should render the label", () => {
      const component = findByTestAttribute(wrapper, "algorithm-label");
      expect(component.length).toBe(1);
    });

    it("should render the options", () => {
      const component = findByTestAttribute(wrapper, "algorithm-option");
      expect(component.length).toBe(3);
    });
  });

  describe("Algorithm Type Selector Component", () => {
    const setUp = (props = {}) => {
      const component = shallow(<AlgorithmTypeSelector {...props} />);
      return component;
    };

    let wrapper: any;
    beforeEach(() => {
      wrapper = setUp();
    });

    it("should render the component", () => {
      const component = findByTestAttribute(wrapper, "algorithm-type-selector");
      expect(component.length).toBe(1);
    });

    it("should render the label", () => {
      const component = findByTestAttribute(wrapper, "algorithm-label");
      expect(component.length).toBe(1);
    });

    it("should render the options", () => {
      const component = findByTestAttribute(wrapper, "algorithm-option");
      expect(component.length).toBe(3);
    });
  });
});
