import React, { useState } from "react";
import { SearchList, SearchInput } from "../Components/Index";
import { useSelector } from "react-redux";
import { Data } from "../Components/Types/Type";

export default function Search(props: any): React.ReactElement {
  const [name, setName] = useState<string>("");
  const [data, setData] = useState<Data[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const States = useSelector((State: Data[]) => State);
  const dataChange = (e: Data[]) => {
    setData(e);
  };

  const nameChange = (s: string) => {
    setName(s);
  };

  const loadingChange = (b: boolean) => {
    setLoading(b);
  };

  return (
    <div
      data-testid="search-screen"
      className="d-flex flex-column justify-content-center align-items-center"
    >
      <SearchInput
        dataChange={dataChange}
        nameChange={nameChange}
        loadingChange={loadingChange}
        State={States}
      />
      <SearchList data={data} name={name} loading={loading} />
    </div>
  );
}
