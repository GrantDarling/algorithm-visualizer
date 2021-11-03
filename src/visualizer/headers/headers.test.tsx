import * as redux from "react-redux";
import { shallow, configure } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";
import { findByTestAttribute } from "../helpers/helpers";

import { AlgorithmSelector } from "./algorithm-selector";
import { AlgorithmTypeSelector } from "./algorithm-type-selector";
import { Complexity } from "./complexity";
import { CreateGrid } from "./create-grid";

configure({ adapter: new EnzymeAdapter() });

describe("Header Components", () => {
  describe("Algorithm Selector Component", () => {
    const useSelectorMock = jest.spyOn(redux, "useSelector");

    const setUp = (props = {}) => {
      const component = shallow(<AlgorithmSelector {...props} />);
      return component;
    };

    let wrapper: any;
    beforeEach(() => {
      useSelectorMock.mockClear();
      useSelectorMock.mockReturnValue({
        algorithm: {
          type: "bubbleSort",
          timeComplexity: "time",
          spaceComplexity: "space",
        },
      });
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

    it("should set the correct bubble sort selected state", () => {
      const option = wrapper.find('option[data-testid="bubble-sort"]');
      option.simulate("click");
      expect(option.props().value).toBe("bubbleSort");
    });

    it("should set the correct selection sort selected state", () => {
      const option = wrapper.find('option[data-testid="selection-sort"]');
      option.simulate("click");
      expect(option.props().value).toBe("selectionSort");
    });

    it("should set the correct merge sort selected state", () => {
      const option = wrapper.find('option[data-testid="merge-sort"]');
      option.simulate("click");
      expect(option.props().value).toBe("mergeSort");
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
      expect(component.length).toBe(1);
    });
  });

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
        algorithm: { timeComplexity: "time", spaceComplexity: "space" },
      });
      wrapper = setUp();
    });

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

  describe("Create Grid Component", () => {
    const useSelectorMock = jest.spyOn(redux, "useSelector");
    const useDispatchMock = jest.spyOn(redux, "useDispatch");

    const setUp = (props = {}) => {
      const component = shallow(<CreateGrid {...props} />);
      return component;
    };

    let wrapper: any;
    beforeEach(() => {
      useSelectorMock.mockClear();
      useDispatchMock.mockClear();

      const dummyDispatch = jest.fn();
      useDispatchMock.mockReturnValue(dummyDispatch);
      useSelectorMock.mockReturnValue({ gridSize: 10 });
      wrapper = setUp();
    });

    it("should render the component", () => {
      const component = findByTestAttribute(wrapper, "create-grid");
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
});
