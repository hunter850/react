import { Fragment, useState, useEffect } from "react"
import useTimeout from "./hooks/useTimeout";
import useInterval from "./hooks/useInterval";
import useDebounce from "./hooks/useDebounce";
import useUpdateEffect from "./hooks/useUpdateEffect";
import useArray from "./hooks/useArray";

const TryUseTimeout = () => {

    const [count, setCount] = useState(10);
    // const [timer, clear] = useTimeout(() => setCount(0), 1000);
    const [timer, clear] = useInterval(() => {setCount(pre => pre + 1)}, 1000);
    const cArray = useArray([1, 2, 3, 4]);

    useDebounce(() => {
        console.log(count);
    }, 2000, [count])

    // useEffect(() => {
    //     alert(count);
    // }, [count]);
    // useUpdateEffect(() => {
    //     alert(count);
    // }, [count]);

    const el = (
        <Fragment>
            <h1>{count}</h1>
            <button onClick={() => setCount(pre => pre + 1)}>Increment</button>
            <button onClick={clear}>Clear Timeout</button>
            <button onClick={timer}>Reset Timeout</button>
            <br />
            <hr />
            <br />
            <h1>Array: {cArray.value.join(", ")}</h1>
            <h1>slice(1, -1): {cArray.cslice(1, -1).join(", ")}</h1>
            <h1>length: {cArray.clength()}</h1>
            <button onClick={() => cArray.cpop().cpush(10).cpush(20).cpush(30)}>push 10, 20, 30</button>
            <button onClick={() => cArray.cpop()}>pop</button>
            <button onClick={() => cArray.cunshift(99)}>unshift 99</button>
            <button onClick={() => cArray.cshift()}>shift</button>
            <button onClick={() => cArray.csplice(1, 2, 10, 11, 12)}>splice(1,2,10,11,12)</button>
            <button onClick={() => cArray.cfilter(item => item <= 10)}>fiter</button>
            <button onClick={() => cArray.creverse()}>reverse</button>
            <button onClick={() => cArray.cclear()}>clear</button>
        </Fragment>
    )

    return el;
}

export default TryUseTimeout