import * as redux from "react-redux";
import { shallow, configure } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";

import { findByTestAttribute } from "../../helpers/helpers";
import { Complexity } from "./complexity-presentational";

configure({ adapter: new EnzymeAdapter() });

describe("Algorithm Complexity Component", () => {
  const useSelectorMock = jest.spyOn(redux, "useSelector");

  const setUp = (props = {}) => {
    const component = shallow(<Complexity {...props} />);
    return component;
  };

  let wrapper: any;
  beforeEach(() => {
    useSelectorMock.mockClear();
    useSelectorMock.mockReturnValue({
      algorithm: {
        type: "",
        timeComplexity: "",
        spaceComplexity: "",
      },
    });

    wrapper = setUp();
  });

  describe("Renders Component", () => {
    it("should render the component", () => {
      const component = findByTestAttribute(wrapper, "algorithm-complexity");
      expect(component.length).toBe(1);
    });

    it("should render the time complexity", () => {
      const component = findByTestAttribute(
        wrapper,
        "algorithm-time-complexity"
      );
      expect(component.length).toBe(1);
    });

    it("should render the space complexity", () => {
      const component = findByTestAttribute(
        wrapper,
        "algorithm-space-complexity"
      );
      expect(component.length).toBe(1);
    });
  });
});
