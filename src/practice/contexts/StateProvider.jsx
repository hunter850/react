import React, { useContext, useReducer } from "react";
import { initData } from "./initData";

const StateContext = React.createContext([]);
export function useControlData() {
    return useContext(StateContext);
}

function reducer(state, action) {
    if (action.type === undefined) action.type = "POST";
    if (state[action.name] === action.data) return {...state};
    switch (action.type) {
        case "POST":
            return { ...state, [action.name]: action.data };
        case "DELETE":
            delete state[action.name];
            return { ...state };
        default:
            return { ...state };
    }
}

function StateProvider(props) {
    const { children } = props;
    const [state, dispatch] = useReducer(reducer, initData);
    return (
        <StateContext.Provider value={[state, dispatch]}>
            {children}
        </StateContext.Provider>
    );
}

export default StateProvider;
