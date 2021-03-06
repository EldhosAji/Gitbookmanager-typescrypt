import { Data } from "../Types/Type";

type result = Data[];
var result: result = [];

export function GetFilterDataStatus(
  UserMailIdOne: string,
  UserMailIdTwo: string
): boolean {
  return UserMailIdOne !== UserMailIdTwo;
}

export function GetDataObject(link: string, userName: string): Data {
  return { Title: "-", repoLink: link, userName: userName };
}
export function UserName(ref: boolean, u1: any, u2: any): string {
  return ref ? u1 : u2;
}
export function PushToResult(res: any, ref: boolean): void {
  result.push(
    GetDataObject(res.html_url, UserName(ref, res.owner.login, res.login))
  );
}

export function GetFilterData(State: Data[], i: number) {
  const data = result.filter((Data: Data) =>
    GetFilterDataStatus(Data.repoLink, State[i].repoLink)
  );
  return [...data];
}

export function DataFilter(data: Data[], ref: boolean, State: Data[]): void {
  console.log(data)
  data.map((res: any) => PushToResult(res, ref));
  Object.keys(State).map((_, index) => (result = GetFilterData(State, index)));
}

function FilterData(data: any, State: Data[], ref: boolean): Data[] {
  if (data === [] || data === undefined) {
    return [];
  }
  DataFilter(data, ref, State);
  return result;
}

export default FilterData;
