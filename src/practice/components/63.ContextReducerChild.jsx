import { Fragment } from "react";
import { useControlData } from "../contexts/StateProvider";
import useData from "../hooks/useData";

function ContextReducerChild() {
    const [state] = useControlData();
    const [age, setAge] = useData("age");
    return (
        <Fragment>
            <h1>{JSON.stringify(state)}</h1>
            <h1>{age}</h1>
        </Fragment>
    );
}

export default ContextReducerChild;