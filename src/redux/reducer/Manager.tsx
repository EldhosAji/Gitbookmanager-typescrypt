interface Data {
  Title?: string | null;
  userName: string;
  repoLink: string;
  state: boolean;
}
var ds = JSON.parse(localStorage.getItem("githost-data") || "[]");

const Manager = (State: Data[] = ds, action: any): any => {
  switch (action.type) {
    case "ADDTOMANAGER":
      localStorage.setItem(
        "githost-data",
        JSON.stringify([...State, action.payload])
      );
      return [...State, action.payload];
    case "REMOVEFROMMANAGER":
      const state = State.filter(
        (item) => item.repoLink !== action.payload.repoLink
      );
      localStorage.setItem("githost-data", JSON.stringify([...state]));
      return [...state];
    default:
      return State;
  }
};

export default Manager;
