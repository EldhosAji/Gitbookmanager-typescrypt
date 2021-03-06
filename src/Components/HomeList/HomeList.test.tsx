import React from "react";
import { render } from "@testing-library/react";
import HomeList from "./HomeList";
import ListRender from "./ListRender";
import { data } from "../../Utils/test_data";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { reducer } from "../../redux/Index";
import { Data } from "../Types/Type";
const store = createStore(reducer);
interface DataP {
  data: Data[];
}
const Demo = ({ data }: DataP) => {
  return (
    <Provider store={store}>
      <ListRender data={data} />
    </Provider>
  );
};
describe("HomeList test", () => {
  it("HomeList render test", () => {
    const { queryByTestId } = render(
      <Provider store={store}>
        <HomeList data={data} />
      </Provider>
    );
    expect(queryByTestId("HomeList")).toBeTruthy();
  });
  it("HomeList with [] data", () => {
    const { queryByTestId } = render(
      <Provider store={store}>
        <HomeList data={[]} />
      </Provider>
    );
    expect(queryByTestId("HomeList")).toHaveTextContent("Git manager is empty");
  });
  it("ListRender", () => {
    const { queryByTestId } = render(<ListRender data={[]} />);
    expect(queryByTestId("h1-tag")).toHaveTextContent("Git manager is empty");
  });
  it("ListRender", () => {
    const { queryByTestId } = render(<Demo data={data} />);
    expect(queryByTestId("listView")).toBeVisible();
  });
});
