import { mount } from "enzyme";
import { Provider } from "react-redux";
import { store } from "../../../store";
import { findByTestAttribute } from "../../helpers/test-helpers";
import { AlgorithmSelector } from "./selector-presentation";

describe("Algorithm Selector Component", () => {
  const setUp = (props = {}) => {
    const component = mount(
      <Provider store={store}>
        <AlgorithmSelector {...props} />
      </Provider>
    );
    return component;
  };

  let wrapper: any;
  beforeEach(() => (wrapper = setUp()));

  describe("Selector Component Tests:", () => {
    describe("Render Component", () => {
      it("should render the component", () => {
        const component = findByTestAttribute(wrapper, "algorithm-selector").at(
          1
        );
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

    describe("Bubble Sort Option", () => {
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

    describe("Selection Sort Option", () => {
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

    describe("Heap Sort Option", () => {
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
});
