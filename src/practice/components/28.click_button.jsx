import { Fragment, useState, useEffect } from "react";

const ClickButton = () => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You click ${count} times`;
        // console.log(count);
    }, [count]);

    const el = (
        <Fragment>
            <p>You click {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click to add</button>
        </Fragment>
    )

    return el;

}

export default ClickButton