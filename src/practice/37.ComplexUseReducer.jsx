import { Fragment, useReducer } from "react";

const initialState = {width: "200px", height: "200px", backgroundColor: "#faf", fontSize: "24px"};
const reducer = (state, action) => {
    switch(action.type) {
        case "w200":
            return {...state, width: "200px"};
        case "w400":
            return {...state, width: "400px"};
        case "h200":
            return {...state, height: "200px"};
        case "h400":
            return {...state, height: "400px"};
        case "bg_faf":
            return {...state, backgroundColor: "#faf"};
        case "bg_f00":
            return {...state, backgroundColor: "#f00"};
        case "bg_0f0":
            return {...state, backgroundColor: "#0f0"};
        case "fz_16":
            return {...state, fontSize: "16px"};
        case "fz_24":
            return {...state, fontSize: "24px"};
        case "fz_36":
            return {...state, fontSize: "36px"};
        default:
            return {...state};
    }
}

const ComplexUseReducer = () => {

    const [boxStyle, dispatch] = useReducer(reducer, initialState);

    const el = (
        <Fragment>
            <div style={boxStyle}>Hello Reducer</div>
            <button onClick={() => dispatch({type: "w200"})}>width: 200px</button>
            <button onClick={() => dispatch({type: "w400"})}>width: 400px</button>
            <br />
            <button onClick={() => dispatch({type: "h200"})}>height: 200px</button>
            <button onClick={() => dispatch({type: "h400"})}>height: 400px</button>
            <br /><br />
            <button onClick={() => dispatch({type: "bg_faf"})}>background: #faf</button>
            <button onClick={() => dispatch({type: "bg_f00"})}>background: #f00</button>
            <button onClick={() => dispatch({type: "bg_0f0"})}>background: #0f0</button>
            <br /><br />
            <button onClick={() => dispatch({type: "fz_16"})}>fontSize: 16px</button>
            <button onClick={() => dispatch({type: "fz_24"})}>fontSize: 24px</button>
            <button onClick={() => dispatch({type: "fz_36"})}>fontSize: 36px</button>
            <button onClick={() => dispatch({type: "hello"})}>hello</button>
        </Fragment>
    )

    return el;
}

export default ComplexUseReducer