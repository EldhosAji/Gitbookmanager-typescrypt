import React from "react";
import { render } from "@testing-library/react";
import Pagination from "./Pagination";
import { shallow } from "enzyme";
import { data } from "../../Utils/test_data";

describe("Pagination test", () => {
  it("Pagination render test", () => {
    const { queryByTestId } = render(
      <Pagination postsPerPage={10} Posts={30} paginate={(e) => console.log} />
    );
    expect(queryByTestId("Pagination")).toBeTruthy();
  });
});
