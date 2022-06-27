import { Fragment } from "react";
import { usePersonVariable } from "./43.VariableProvider";

const VariableGrandChild = () => {

    const person = usePersonVariable();

    const el = (
        <Fragment>
            <h1>{person.firstName}</h1>
            <h1>{person.lastName}</h1>
            <h1>{person.age}</h1>
            <h1>{person.gender}</h1>
        </Fragment>
    )

    return el;
}

export default VariableGrandChild