import { mount, configure } from "enzyme";
// import { createStore, combineReducers } from "redux";
import { Provider, useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";

import { store } from "../../../store/store";
import reducer from "../../../store/reducer";
import { findByTestAttribute } from "../../helpers/helpers";
import { Complexity } from "./complexity-presentational";

import { createStore } from "redux";

configure({ adapter: new EnzymeAdapter() });

describe("Algorithm Type Selector Component", () => {
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

  it("should render the component", () => {
    console.log(store.getState());

    store.dispatch({
      type: "TOGGLE_START",
      global: store.getState(),
    });

    console.log(store.getState());
    expect(store.getState().start).toBe(true);
  });
});
