import * as redux from "react-redux";
import { shallow, configure } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";
import { findByTestAttribute } from "../../helpers/test-helpers";

import { CreateGrid } from "./create-grid-presentational";

configure({ adapter: new EnzymeAdapter() });

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
    useDispatchMock.mockReturnValue(jest.fn());
    useSelectorMock.mockReturnValue({ gridSize: 30 });
    wrapper = setUp();
  });

  describe("Renders Component", () => {
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

  describe("Functionality", () => {
    it("should not accept a non-number value", () => {
      const component = findByTestAttribute(wrapper, "create-grid-input");
      expect(component.props().type).toBe("number");
    });
  });
});
