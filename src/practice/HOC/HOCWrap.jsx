import React, { useContext } from "react";
import HOCFunction from "./HOCFunction";
import reducer from "./HOCReducer";
import { initData } from "./initData";

const StateContext = React.createContext();
export function useWrapData() {
    return useContext(StateContext);
}

export default HOCFunction(StateContext, reducer, initData);
