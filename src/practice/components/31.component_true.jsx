import { useEffect, useState, useRef, Fragment } from "react";

const ComponentTrue = () => {

    const initialed = useRef(false);
    const [count, setCount] = useState(0);

    const clickHandler = () => {
        setCount(pre => pre + 1);
    }

    useEffect(() => {
        if(!initialed.value) {
            initialed.value = true;
            console.log("true mount");
        } else {
            console.log("true update");
        }

        return () => {
            console.log("true unmout");
        }
    }, [count]);

    const el = (
        <Fragment>
            <h1>True</h1>
            <h2>update {count} times</h2>
            <button onClick={clickHandler}>click to update</button>
            <br />
            <br />
        </Fragment>
    )

    return el;
}

export default ComponentTrue