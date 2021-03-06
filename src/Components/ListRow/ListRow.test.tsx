import React from "react";
import { render } from "@testing-library/react";
import ListRow from "./ListRow";

import { data } from "../../Utils/test_data";

describe("ListRow test", () => {
  it("ListRow render test", () => {
    const { queryByTestId } = render(
      <ListRow
        userName={data[1].userName}
        repoLink={data[1].repoLink}
        onClick={() => console.log}
      />
    );
    expect(queryByTestId("ListRow")).toBeTruthy();
  });
  it("ListRow Title display test", () => {
    const { queryByTestId } = render(
      <ListRow
        Title="title test"
        userName={data[1].userName}
        repoLink={data[1].repoLink}
        onClick={() => console.log}
      />
    );
    expect(queryByTestId("ListRow")).toHaveTextContent("title test");
  });
});
