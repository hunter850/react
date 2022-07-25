import React, { useContext, useReducer, useCallback } from "react";
import { initData } from "./initData";

const StateContext = React.createContext([]);

export function useCartData() {
    return useContext(StateContext);
}

export function useCart(dataName) {
    const [state, dispatch] = useContext(StateContext);
    const changeDataSetter = useCallback((updateData) => {
        dispatch({name: dataName, data: updateData})
    }, []);
    const deleteData = useCallback(() => {
        dispatch({type: "DELETE", name: dataName});
    }, []);
    if (dataName === undefined) {
        return [state, dispatch];
    }
    return [state[dataName], changeDataSetter, deleteData];
}

function reducer(state, action) {
    if (action.type === undefined) action.type = "POST";
    if (state[action.name] === action.data) return state;
    switch (action.type) {
        case "POST":
            return { ...state, [action.name]: action.data };
        case "DELETE":
            if (state[action.name] === undefined) return state;
            const newState = { ...state };
            delete newState[action.name];
            return newState;
        default:
            return state;
    }
}

function CartProvider(props) {
    const { children } = props;
    const [state, dispatch] = useReducer(reducer, initData);
    return (
        <StateContext.Provider value={[state, dispatch]}>
            {children}
        </StateContext.Provider>
    );
}

export default CartProvider;
