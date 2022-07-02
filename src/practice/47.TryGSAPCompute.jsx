import { Fragment, useState, useEffect } from "react"
import useGSAPCompute from "./hooks/useGSAPCompute"

const TryGSAPCompute = () => {

    const [inputValue, setInputValue] = useState(0);
    const [content, setContent] = useState({ price: 0 });
    const [boxStyle, setBoxStyle] = useState({width: "200px", height: "200px", backgroundColor: "#faf"})
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
            <h1>{content.price}</h1>
            <button onClick={() => compute({width: "400px", height: "400px", backgroundColor: "#000"}, boxStyle, setBoxStyle, 1)}>change box</button>
            <button onClick={() => compute({width: "200px", height: "200px", backgroundColor: "#faf"}, boxStyle, setBoxStyle, 1)}>go back box</button>
            <div style={boxStyle}></div>
        </Fragment>
    )

    return el;
}

export default TryGSAPCompute