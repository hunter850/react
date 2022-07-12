import { Fragment } from "react";
import { useStyle } from "./57.StyleProvider";
import { useBreak } from "./57.StyleProvider";

function GrandChild() {
    const styles = useStyle();
    const breakPoint = useBreak();
    return (
        <Fragment>
            <h1 style={styles}>Hello React</h1>
            <h1>{breakPoint}</h1>
        </Fragment>
    );
}

export default GrandChild;