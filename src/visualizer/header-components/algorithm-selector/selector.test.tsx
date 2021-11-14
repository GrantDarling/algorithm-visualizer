import * as redux from "react-redux";
import { shallow } from "enzyme";

import { findByTestAttribute } from "../../helpers/test-helpers";
import { AlgorithmSelector } from "./selector-presentation";

describe("Algorithm Selector Component", () => {
  const useSelectorMock = jest.spyOn(redux, "useSelector");
  const useDispatchMock = jest.spyOn(redux, "useDispatch");

  const setUp = (props = {}) => {
    const component = shallow(<AlgorithmSelector {...props} />);
    return component;
  };

  let wrapper: any;
  beforeEach(() => {
    useSelectorMock.mockClear();
    useDispatchMock.mockClear();

    useDispatchMock.mockReturnValue(jest.fn());
    useSelectorMock.mockReturnValue({
      algorithm: {
        type: "",
        timeComplexity: "",
        spaceComplexity: "",
      },
    });

    wrapper = setUp();
  });

  describe("Render Component", () => {
    it("should render the component", () => {
      const mockDispatch = jest.fn();
      jest.mock("react-redux", () => ({
        useDispatch: () => mockDispatch,
      }));
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

  describe("Bubble Sort", () => {
    it("should set the correct bubble sort type", () => {
      const option = wrapper.find('option[data-testid="bubble-sort"]');
      option.simulate("click");
      expect(option.props().value).toBe("bubbleSort");
    });

    it("should set the correct bubble sort time complexity", () => {
      const option = wrapper.find('option[data-testid="bubble-sort"]');
      option.simulate("click");
      expect(option.props()["data-timecomplexity"]).toBe("O(n²)");
    });

    it("should set the correct bubble sort space complexity", () => {
      const option = wrapper.find('option[data-testid="bubble-sort"]');
      option.simulate("click");
      expect(option.props()["data-spacecomplexity"]).toBe("O(1)");
    });
  });

  describe("Selection Sort", () => {
    it("should set the correct selection sort type", () => {
      const option = wrapper.find('option[data-testid="selection-sort"]');
      option.simulate("click");
      expect(option.props().value).toBe("selectionSort");
    });

    it("should set the correct selection sort time complexity", () => {
      const option = wrapper.find('option[data-testid="selection-sort"]');
      option.simulate("click");
      expect(option.props()["data-timecomplexity"]).toBe("O(n²)");
    });

    it("should set the correct selection sort space complexity", () => {
      const option = wrapper.find('option[data-testid="selection-sort"]');
      option.simulate("click");
      expect(option.props()["data-spacecomplexity"]).toBe("O(1)");
    });
  });

  describe("Heap Sort", () => {
    it("should set the correct heap sort type", () => {
      const option = wrapper.find('option[data-testid="heap-sort"]');
      option.simulate("click");
      expect(option.props().value).toBe("heapSort");
    });

    it("should set the correct heap sort time complexity", () => {
      const option = wrapper.find('option[data-testid="heap-sort"]');
      option.simulate("click");
      expect(option.props()["data-timecomplexity"]).toBe("O(nlogn)");
    });

    it("should set the correct heap sort space complexity", () => {
      const option = wrapper.find('option[data-testid="heap-sort"]');
      option.simulate("click");
      expect(option.props()["data-spacecomplexity"]).toBe("O(1)");
    });
  });
});
