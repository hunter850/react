import { Fragment } from "react";
import useData from "./hooks/useData";
import { useControlData } from "./contexts/StateProvider";
import Child from "./components/64.Child";

function TryContextCounter() {
    const [state, dispatch] = useControlData();
    const [count, setCount] = useData("count");
    return (
        <Fragment>
            <button onClick={() => setCount(count - 1)}>useData: click to minus 1</button>
            <button onClick={() => setCount(count + 1)}>useData: click to add 1</button>
            <button
                onClick={() =>
                    dispatch({ name: "count", data: state.count - 1 })
                }
            >
                useControlData: click to minus 1
            </button>
            <button
                onClick={() =>
                    dispatch({ name: "count", data: state.count + 1 })
                }
            >
                useControlData: click to add 1
            </button>
            <Child />
        </Fragment>
    );
}

export default TryContextCounter;
