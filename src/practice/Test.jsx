import { Fragment, useState } from "react";
import useAlert from "./hooks/useAlert";

function Test() {
    const [count, setCount] = useState(0);
    const [calert, MyAlert] = useAlert(); 
    const clickHandler = () => {
        calert("hello");
    }
    return (
        <Fragment>
            <button onClick={() => setCount(count + 1)}>{count}</button>
            <MyAlert style={{color: "red"}} className="hello">
                <MyAlert.Confirm>
                    確認
                </MyAlert.Confirm>
            </MyAlert>
            <button onClick={clickHandler}>click</button>
        </Fragment>
    );
}

export default Test;