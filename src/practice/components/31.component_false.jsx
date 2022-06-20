import { useEffect, useState, useRef, Fragment } from "react";

const ComponentFalse = () => {

    const initialed = useRef(false);
    const [count, setCount] = useState(0);

    const clickHandler = () => {
        setCount(pre => pre + 1);
    }

    useEffect(() => {
        if(!initialed.value) {
            initialed.value = true;
            console.log("false mount");
        } else {
            console.log("false update");
        }

        return () => {
            console.log("false unmout");
        }
    }, [count]);

    const el = (
        <Fragment>
            <h1>False</h1>
            <h2>update {count} times</h2>
            <button onClick={clickHandler}>click to update</button>
            <br />
            <br />
        </Fragment>
    )

    return el;
}

export default ComponentFalse