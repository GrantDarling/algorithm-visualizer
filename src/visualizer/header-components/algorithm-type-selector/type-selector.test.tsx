import { shallow } from "enzyme";
import { findByTestAttribute } from "../../helpers/test-helpers";
import { AlgorithmTypeSelector } from "./type-selector-presentation";

describe("Algorithm Type Selector Component", () => {
  const setUp = (props = {}) => {
    const component = shallow(<AlgorithmTypeSelector {...props} />);
    return component;
  };

  let wrapper: any;
  beforeEach(() => (wrapper = setUp()));

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
