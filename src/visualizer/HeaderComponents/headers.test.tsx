import * as redux from "react-redux";
import { shallow, configure } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";
import { findByTestAttribute } from "../Helpers/helpers";

import { CreateGrid } from "./create-grid";

configure({ adapter: new EnzymeAdapter() });

describe("Header Components", () => {
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
