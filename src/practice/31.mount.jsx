import { useState, Fragment } from "react"
import ComponentTrue from "./components/31.component_true"
import ComponentFalse from "./components/31.component_false"

const Mount = () => {

    const [status, setStatus] = useState(true);

    const clickHandler = () => {
        setStatus(pre => !pre);
    }

    const el = (
        <Fragment>
            {status ? <ComponentTrue /> : <ComponentFalse />}
            <button onClick={clickHandler}>click to change</button>
        </Fragment>
    )

    return el;
}

export default Mount