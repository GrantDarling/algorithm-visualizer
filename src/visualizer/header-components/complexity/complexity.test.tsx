import { Provider } from "react-redux";
import { mount } from "enzyme";
import { store } from "../../../store";
import { Complexity } from "./complexity-presentational";
import {
  findByTestAttribute,
  dispatchAlgorithm,
} from "../../helpers/test-helpers";

describe("Algorithm Complexity Component", () => {
  const setUp = (props = {}) => {
    const component = mount(
      <Provider store={store}>
        <Complexity {...props} />
      </Provider>
    );
    return component;
  };

  let wrapper: any;
  beforeEach(() => {
    wrapper = setUp();
  });

  describe("Complexity Tests:", () => {
    describe("Renders Component", () => {
      it("should render the component", () => {
        const component = findByTestAttribute(
          wrapper,
          "algorithm-complexity"
        ).at(1);
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
    describe("Display Complexities:", () => {
      let component: any;
      beforeEach(() => {
        component = findByTestAttribute(wrapper, "algorithm-complexity").at(1);
      });
      describe("BubbleSort Complexities:", () => {
        it("should display bubblsort time complexity", () => {
          store.dispatch(dispatchAlgorithm("bubble-sort"));
          const timeComplexity = component.childAt(1).text();
          expect(timeComplexity).toBe("Time: O(n²)");
        });

        it("should display bubblsort space complexity", () => {
          store.dispatch(dispatchAlgorithm("bubble-sort"));
          const spaceComplexity = component.childAt(2).text();
          expect(spaceComplexity).toBe("Space: O(1)");
        });
      });

      describe("SelectionSort Complexities:", () => {
        it("should display selectionsort time complexity", () => {
          store.dispatch(dispatchAlgorithm("selection-sort"));
          const timeComplexity = component.childAt(1).text();
          expect(timeComplexity).toBe("Time: O(n²)");
        });

        it("should display selectionsort space complexity", () => {
          store.dispatch(dispatchAlgorithm("bubble-sort"));
          const spaceComplexity = component.childAt(2).text();
          expect(spaceComplexity).toBe("Space: O(1)");
        });
      });

      describe("HeapSort Complexities:", () => {
        it("should display selectionsort time complexity", () => {
          store.dispatch(dispatchAlgorithm("heap-sort"));
          const timeComplexity = component.childAt(1).text();
          expect(timeComplexity).toBe("Time: O(nlogn)");
        });

        it("should display selectionsort space complexity", () => {
          store.dispatch(dispatchAlgorithm("bubble-sort"));
          const spaceComplexity = component.childAt(2).text();
          expect(spaceComplexity).toBe("Space: O(1)");
        });
      });
    });
  });
});
