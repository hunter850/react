import { Fragment, useState, useRef } from "react"
import CustomInput from "./components/48.CustomInput";

const TryUseImperativeHandle = () => {

    const [value, setValue] = useState("red");
    const inputRef = useRef(null);

    const el = (
        <Fragment>
            <CustomInput
                ref={inputRef}
                value={value}
                onChange={e => setValue(e.target.value)}
            />
            <br /><br />
            <button onClick={() => inputRef.current.alertHi()}>Focus</button>
        </Fragment>
    )

    return el;
}

export default TryUseImperativeHandle