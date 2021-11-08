import * as redux from "react-redux";
import { shallow, configure } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";
import { findByTestAttribute } from "../../helpers/helpers";

import { Header } from "./header-presentational";

configure({ adapter: new EnzymeAdapter() });

describe("Header Components", () => {
  const useSelectorMock = jest.spyOn(redux, "useSelector");
  const useDispatchMock = jest.spyOn(redux, "useDispatch");

  const setUp = (props = {}) => {
    const component = shallow(<Header {...props} />);
    return component;
  };

  let wrapper: any;
  beforeEach(() => {
    useSelectorMock.mockClear();
    useDispatchMock.mockClear();
    useDispatchMock.mockReturnValue(jest.fn());
    useSelectorMock.mockReturnValue({ gridSize: 30 });

    wrapper = setUp();
  });

  describe("Renders Component", () => {
    it("should render the head component", () => {
      const component = findByTestAttribute(wrapper, "head");
      expect(component.length).toBe(1);
    });

    it("should render the subhead component", () => {
      const component = findByTestAttribute(wrapper, "subhead");
      expect(component.length).toBe(1);
    });

    it("should render the algorithm type selector component", () => {
      const component = findByTestAttribute(wrapper, "algorithm-type-selector");
      expect(component.length).toBe(1);
    });

    it("should render the algorithm selector component", () => {
      const component = findByTestAttribute(wrapper, "algorithm-selector");
      expect(component.length).toBe(1);
    });

    it("should render the algorithm visualizer button", () => {
      const component = findByTestAttribute(wrapper, "visualizer-button");
      expect(component.length).toBe(1);
    });

    it("should render the create grid component", () => {
      const component = findByTestAttribute(wrapper, "create-grid");
      expect(component.length).toBe(1);
    });

    it("should render the complexity component", () => {
      const component = findByTestAttribute(wrapper, "complexity");
      expect(component.length).toBe(1);
    });
  });
});
