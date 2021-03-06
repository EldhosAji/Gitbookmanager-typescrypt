import React from "react";
import { render } from "@testing-library/react";
import List, { handleEvent } from "./List";
import { data, filtered_data } from "../../Utils/test_data";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";

import { createStore } from "redux";
import { Provider } from "react-redux";
import { reducer } from "../../redux/Index";
import { Data } from "../Types/Type";
import ListRender from "./ListRender";
import ListRow from "../ListRow/ListRow";

configure({ adapter: new Adapter() });
const store = createStore(reducer);
interface DataP {
  data: Data[];
}
const Demo = ({ data }: DataP) => {
  return (
    <Provider store={store}>
      <List data={data} />
    </Provider>
  );
};

describe("List test", () => {
  it("List render test", () => {
    const { queryByTestId } = render(<Demo data={data} />);
    expect(queryByTestId("listView")).toBeTruthy();
  });
  it("List render test with [] data", () => {
    const { queryByTestId } = render(<Demo data={[]} />);
    expect(queryByTestId("listView")).toBeTruthy();
  });

  it("List data render test", () => {
    const { queryByTestId } = render(<Demo data={data} />);
    expect(queryByTestId("listView")).toHaveTextContent(data[1].userName);
  });

  test("ListRender render test", () => {
    const { queryByTestId } = render(
      <ListRender currentPosts={[]} handleEvent={() => ""} />
    );
    expect(queryByTestId("null-obj")).toBeVisible();
  });

  it("List handlevent", () => {
    expect(handleEvent(data[1]));
  });

  it("List handlevent", () => {
    expect(
      handleEvent({
        Title: "",
        repoLink: data[1].repoLink,
        userName: data[1].userName,
        state: false,
      })
    );
  });

  it("Onclick test", () => {
    const wrapper = shallow(
      <ListRender currentPosts={data} handleEvent={() => ""} />
    );
    const clickEvent = wrapper
      .find(
        <ListRow
          userName={data[1].userName}
          repoLink={data[1].repoLink}
          onClick={() => console.log}
        />
      )
      .find("#onclick-test")
      .simulate("click");
  });
});
