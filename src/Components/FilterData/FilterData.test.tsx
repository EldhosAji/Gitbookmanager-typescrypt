import {
  fetch_data,
  data,
  filtered_data,
  dummyData,
} from "../../Utils/test_data";
import FilterData, {
  DataFilter,
  GetDataObject,
  GetFilterData,
  GetFilterDataStatus,
  PushToResult,
  UserName,
} from "./FilterData";

describe("FilterData component", () => {
  it("Filtered data test", () => {
    expect(FilterData(fetch_data, filtered_data, true)).toStrictEqual(
      filtered_data
    );
  });
  it("Filter with empty fetch data from git", () => {
    expect(FilterData([], filtered_data, true)).toStrictEqual([]);
  });
  it("Filter with empty fetch data from git", () => {
    expect(FilterData(undefined, filtered_data, true)).toStrictEqual([]);
  });

  it("Filter with undefined fetch data from git", () => {
    expect(FilterData([], filtered_data, true)).toStrictEqual([]);
  });
  it("Filter with different ref state from git", () => {
    expect(FilterData(fetch_data, filtered_data, false)).toStrictEqual([]);
  });
  it("Filter with different ref state from git", () => {
    expect(FilterData(fetch_data, data, false)).toStrictEqual([]);
  });
  it("getDataObject test", () => {
    expect(FilterData(fetch_data, data, false)).toStrictEqual([]);
  });

  it("Get filter data object", () => {
    expect(GetDataObject(data[1].repoLink, data[1].userName)).toStrictEqual({
      Title: "-",
      repoLink: data[1].repoLink,
      userName: data[1].userName,
    });
  });

  it("Get filterData", () => {
    expect(GetFilterData([], 1)).toStrictEqual([]);
    expect(GetFilterData([...filtered_data, ...data], 1)).toStrictEqual([
      ...filtered_data,
    ]);
    expect(GetFilterData([...filtered_data], 0)).toStrictEqual([
      ...filtered_data,
    ]);
  });

  it("test for checking the repoList same or not", () => {
    expect(
      GetFilterDataStatus(data[1].repoLink, data[1].repoLink)
    ).toStrictEqual(false);
    expect(
      GetFilterDataStatus(data[1].repoLink, data[2].repoLink)
    ).toStrictEqual(true);
  });

  it("Get UserName from given username", () => {
    expect(UserName(true, data[1].userName, data[2].userName)).toStrictEqual(
      data[1].userName
    );

    expect(UserName(false, data[1].userName, data[2].userName)).toStrictEqual(
      data[2].userName
    );
  });

  it("Push to result array", () => {
    expect(PushToResult(dummyData.items[1], true));
  });

  it("Data filter function", () => {
    expect(DataFilter(fetch_data, true, []));
  });
});
