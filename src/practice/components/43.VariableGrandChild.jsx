import { Fragment } from "react";
import { usePersonVariable } from "./43.VariableProvider";
import { useStyle } from "./43.StyleProvider";

const VariableGrandChild = () => {

    const person = usePersonVariable();
    const theme = useStyle();

    const el = (
        <Fragment>
            <h1 style={theme}>{person.firstName}</h1>
            <h1 style={theme}>{person.lastName}</h1>
            <h1 style={theme}>{person.age}</h1>
            <h1 style={theme}>{person.gender}</h1>
        </Fragment>
    )

    return el;
}

export default VariableGrandChild