import React from "react";
import { Data } from "../Types/Type";
import { List } from "../Index";
interface Props {
  data: Data[];
}

function ListRender({ data }: Props) {
  if (data.length > 0) return <List data={data} add={false} />;
  return <h3 data-testid="h1-tag">Git manager is empty</h3>;
}

export default ListRender;
