import { useReducer } from "react";

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