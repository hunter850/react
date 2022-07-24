import { Fragment } from "react";
import GrandChild from "./64.GrandChild";

function Child() {
    return (
        <Fragment>
            <p>This is child</p>
            <GrandChild />
        </Fragment>
    );
}

export default Child;