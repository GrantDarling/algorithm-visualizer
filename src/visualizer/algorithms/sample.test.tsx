import { shallow } from "enzyme";
import { Provider } from "react-redux";
import { Complexity } from "../headers/complexity";

let store: any;
describe("Your test", () => {
  beforeEach(() => {});
  test("Your component with a full reducer flow", async () => {
    // Create a redux store
    const component = shallow(
      <Provider store={store}>
        <Complexity />
      </Provider>
    );

    // store.debug();

    expect(component).toBe(4);
  });
});
