import { Fragment, useState, useEffect } from "react"
import useGSAPCompute from "./hooks/useGSAPCompute"

const TryGSAPCompute = () => {

    const [inputValue, setInputValue] = useState(0);
    const [content, setContent] = useState({ price: 0 });
    const compute = useGSAPCompute();

    const inputHandler = (event) => {
        setInputValue(parseInt(event.target.value || 0));
    }

    useEffect(() => {
        compute({ price: inputValue }, content, setContent, 0.5);
    }, [inputValue]);

    const el = (
        <Fragment>
            <input type="number" value={inputValue} onInput={inputHandler} />
            <h1>{parseInt(content.price)}</h1>
        </Fragment>
    )

    return el;
}

export default TryGSAPCompute