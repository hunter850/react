import { Fragment } from "react";

function GrandChild({ props }) {
    return (
        <Fragment>
            <h1 onClick={() => props.setCount((pre) => pre + 1)}>
                {props.count}
            </h1>
            <h1 onClick={() => props.setCount2((pre) => pre + 1)}>
                {props.count2}
            </h1>
        </Fragment>
    );
}

export default GrandChild;
