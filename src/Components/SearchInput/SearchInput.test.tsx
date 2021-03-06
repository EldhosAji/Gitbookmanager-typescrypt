import React from "react";
import { render } from "@testing-library/react";
import SearchInput from "./SearchInput";
import { shallow, ShallowWrapper } from "enzyme";
import { Data } from "../Types/Type";
import { data } from "../../Utils/test_data";

describe("SearchInput test", () => {
  it("SearchInput render test", () => {
    const { queryByTestId } = render(
      <SearchInput
        dataChange={() => ""}
        nameChange={() => ""}
        loadingChange={() => ""}
        State={data}
      />
    );
    expect(queryByTestId("SearchInput")).toBeTruthy();
  });
  //   let wrapper: ShallowWrapper;
  //   beforeEach(() => {
  //     wrapper = shallow(
  //       <SearchInput
  //         dataChange={(e) => ""}
  //         nameChange={(e) => ""}
  //         loadingChange={(e) => ""}
  //         State={data}
  //       />
  //     );
  //   });

  //   it("SearchInput Render", () => {
  //     expect(wrapper.exists()).toBeTruthy();
  //   });
});
