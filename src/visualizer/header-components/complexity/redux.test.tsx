import { mount } from "enzyme";
import { Provider } from "react-redux";
import { store } from "../../../store/store";
import { Complexity } from "./complexity-presentational";

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
    const component = wrapper;
    console.log(store.getState());

    store.dispatch({
      type: "TOGGLE_START",
      global: store.getState(),
    });

    console.log(store.getState());
    expect(store.getState().start).toBe(true);
    expect(component).toBe(component);
  });
});
