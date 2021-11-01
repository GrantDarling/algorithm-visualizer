import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";
import { shallow, configure } from "enzyme";
import { AlgorithmSelector } from "./algorithm-selector";

import { findByTestAttribute } from "../helpers/helpers";

configure({ adapter: new EnzymeAdapter() });

const setUp = (props = {}) => {
  const component = shallow(<AlgorithmSelector {...props} />);
  return component;
};

describe("Algorithm Selector Component", () => {
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
