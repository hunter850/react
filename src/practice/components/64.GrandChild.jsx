import { Fragment, useState } from "react";
import useData from "../hooks/useData";
import { useControlData } from "../contexts/StateProvider";

function GrandChild() {
    const [state, dispatch] = useControlData();
    const [count, setCount] = useData("count");
    const [temp, setTemp] = useState(count);
    return (
        <Fragment>
            <h1>useData: {count}</h1>
            <h1>useControlData: {state.count}</h1>
            <h1>useData double: {temp}</h1>
        </Fragment>
    );
}

export default GrandChild;