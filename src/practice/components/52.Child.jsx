import { Fragment } from "react";
import GrandChild from "./52.GrandChild";

function Child(props) {
    return (
        <Fragment>
            <GrandChild props={props} />
        </Fragment>
    );
}

export default Child;
