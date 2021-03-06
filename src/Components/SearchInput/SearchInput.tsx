import React, { useState, useEffect } from "react";
import { FilterData } from "../Index";
import { Data } from "../Types/Type";

interface Props {
  dataChange: (data: Data[]) => void;
  nameChange: (e: string) => void;
  loadingChange: (st: boolean) => void;
  State: Data[];
}

const SearchInput: React.FC<Props> = ({
  dataChange,
  nameChange,
  loadingChange,
  State,
}) => {
  const [name, setName] = useState<string>("");
  const [states, setState] = useState<boolean>(true);

  useEffect(() => {
    async function Gosearch() {
      dataChange([]);
      await fetch(
        `https://api.github.com/search/${
          states ? "repositories" : "users"
        }?q=${name}`
      )
        .then((res) => res.json())
        .then(
          (result) => {
            if (result.items !== undefined) {
              dataChange(FilterData(result.items, State, states));
            }
            loadingChange(true);
          },
          (error) => {
            console.log("something went wrong" + error);
          }
        );
    }
    if (name !== "") {
      Gosearch();
    } else {
      dataChange([]);
    }
  }, [name]);

  const nameHandle = (e: any): void => {
    setName(e.target.value);
    nameChange(e.target.value);
  };

  const handleState = (v: boolean): any => {
    setState(v);
    setName("");
    loadingChange(false);
    nameChange("");
    dataChange([]);
  };

  return (
    <div className="d-flex justify-content-center" data-testid="SearchInput">
      <div className="card  row mt-5" style={{ width: "500px" }}>
        <div className="card-body">
          <div className="radio">
            <label className="m-2">
              <input
                type="radio"
                name="opt"
                onClick={() => handleState(true)}
                defaultChecked
              />
              Repository
            </label>
            <label className="m-2">
              <input
                type="radio"
                name="opt"
                onClick={() => handleState(false)}
              />
              User
            </label>
          </div>
          <input
            name="search"
            className="form-control"
            type="text"
            onChange={nameHandle}
            placeholder={`Enter github ${states ? "Repositor" : "User"} name`}
            value={name}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
