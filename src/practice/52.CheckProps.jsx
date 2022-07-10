import { Fragment, useState } from "react";
import Child from "./components/52.Child";

function CheckProps() {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

    return (
        <Fragment>
            <Child
                count={count}
                setCount={setCount}
                count2={count2}
                setCount2={setCount2}
            />
        </Fragment>
    );
}

export default CheckProps;
