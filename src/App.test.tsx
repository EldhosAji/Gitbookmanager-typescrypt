import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

import { Home, Search } from "./View/Index";
import { createStore } from "redux";
import { reducer } from "./redux/Index";
import { Provider } from "react-redux";

const store = createStore(reducer);

it("Home screen render test", () => {
  const { queryByTestId } = render(<App />);
  expect(queryByTestId("nav-bar")).toBeTruthy();
});

it("Search screen render test", () => {
  const { queryByTestId } = render(
    <Provider store={store}>
      <Search />
    </Provider>
  );
  expect(queryByTestId("search-screen")).toBeTruthy();
});
