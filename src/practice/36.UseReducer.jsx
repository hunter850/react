import { Fragment, useReducer } from "react";

const initialState = {count: 0};
const reducer = (state, action) => {
    switch(action.type) {
        case "increment":
            return {count: state.count + 1};
        case "decrement":
            return {count: state.count -1};
        default:
            throw new Error();
    }
}

const UseReducer = () => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const el = (
        <Fragment>
            <button onClick={() => dispatch({type: "decrement"})}>-</button>
            <span style={{fontSize: "48px"}}>{state.count}</span>
            <button onClick={() => dispatch({type: "increment"})}>+</button>
        </Fragment>
    )

    return el;
}

export default UseReducer