import React from "react";
import { Data } from "../Types/Type";
import { List } from "../Index";
interface Props {
  data: Data[];
}

function ListRender({ data }: Props) {
  if (data.length > 0) return <List data={data} add={false} />;
  return <h3>Git manager is empty</h3>;
}

const HomeList: React.FC<Props> = ({ data }) => {
  return (
    <div
      className="card card-body mt-5"
      data-testid="HomeList"
      style={{ width: "70%" }}
    >
      <ListRender data={data} />
    </div>
  );
};

export default HomeList;
