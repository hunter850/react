import { Fragment } from "react";
import { useWrapData } from "../HOC/HOCWrap";

function Child() {
    const [state, dispatch] = useWrapData();
    return (
        <Fragment>
            <h1
                onClick={() =>
                    dispatch({ name: "count", data: state.count + 1 })
                }
            >
                {state.count}
            </h1>
        </Fragment>
    );
}

export default Child;
