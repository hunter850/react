import { Fragment, useState } from "react"
// import useTimeout from "./hooks/useTimeout";
import useInterval from "./hooks/useInterval";

const TryUseTimeout = () => {

    const [count, setCount] = useState(10);
    // const [timer, clear] = useTimeout(() => setCount(0), 1000);
    const [timer, clear] = useInterval(() => {setCount(pre => pre + 1)}, 1000);

    const el = (
        <Fragment>
            <h1>{count}</h1>
            <button onClick={() => setCount(pre => pre + 1)}>Increment</button>
            <button onClick={clear}>Clear Timeout</button>
            <button onClick={timer}>Reset Timeout</button>
        </Fragment>
    )

    return el;
}

export default TryUseTimeout