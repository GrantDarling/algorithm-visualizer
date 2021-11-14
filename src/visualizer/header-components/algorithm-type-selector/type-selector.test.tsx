import { shallow, configure } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";

import { findByTestAttribute } from "../../helpers/test-helpers";
import { AlgorithmTypeSelector } from "./type-selector-presentation";

configure({ adapter: new EnzymeAdapter() });

describe("Algorithm Type Selector Component", () => {
  const setUp = (props = {}) => {
    const component = shallow(<AlgorithmTypeSelector {...props} />);
    return component;
  };

  let wrapper: any;
  beforeEach(() => {
    wrapper = setUp();
  });

  describe("Render Component", () => {
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
      expect(component.length).toBe(1);
    });
  });
});
