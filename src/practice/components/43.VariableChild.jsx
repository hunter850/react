import { Fragment } from "react";
import VariableGrandChild from "./43.VariableGrandChild";

const VariableChild = () => {
    const el = (
        <Fragment>
            <VariableGrandChild />
        </Fragment>
    )

    return el;
}

export default VariableChild