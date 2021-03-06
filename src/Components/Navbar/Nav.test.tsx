import React from "react";
import { render } from "@testing-library/react";
import Navbar from "./Navbar";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { reducer } from "../../redux/Index";
const store = createStore(reducer);

const Comp = () => {
  return (
    <Provider store={store}>
      <Navbar />
    </Provider>
  );
};

describe("Navbar component", () => {
  it("Navbar render test", () => {
    const { queryByTestId } = render(<Comp />);
    expect(queryByTestId("nav-bar")).toBeTruthy();
  });
});
