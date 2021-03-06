import { createStore } from "redux";
import { reducer } from "../Index";

const store = createStore(reducer);

export default store;
