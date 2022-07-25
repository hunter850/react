import React, { Fragment, useContext } from "react";
import HOCFunction from "./HOCFunction";
import reducer from "./HOCReducer";
import { initData } from "./initData";

const StateContext = React.createContext();
export function useWrapData() {
    return useContext(StateContext);
}

const ContextWrap = HOCFunction(StateContext, reducer, initData);

function StateWrap(props) {
    const { children } = props;
    return (
        <ContextWrap>
            {children}
        </ContextWrap>
    )
}

export default StateWrap;
