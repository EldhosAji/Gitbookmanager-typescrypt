import React from "react";
import { Data } from "../Types/Type";
import { List } from "../Index";
interface Props {
  data: Data[];
  name: string;
  loading: boolean;
}
const SearchList: React.FC<Props> = ({ name, data, loading }) => {
  return (
    <>
      {name !== "" ? (
        <div className="card card-body" style={{ width: "70%" }}>
          {loading ? (
            <div>
              <h6>{data.length} Results found</h6>
              <List data={data} add />
            </div>
          ) : (
            <div>
              <div className="spinner-border" />
              Loading...
            </div>
          )}
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default SearchList;
