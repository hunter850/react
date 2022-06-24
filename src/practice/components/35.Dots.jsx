import { useState, useEffect } from "react"

const Dots = ({ imgObj, setActive, setDirection, active }) => {

    const [buttonStyle, setButtonStyle] = useState({
        width: "30px",
        height: "30px",
        borderRadius: "50%",
        border: "none",
        outline: "none",
        backgroundColor: "#0003",
        cursor: "pointer",
        transition: "background-color .3s ease"
    })

    const changeHandler = (index) => {
        if (index > active) {
            setDirection(true);
        } else if (index < active) {
            setDirection(false);
        }
        setActive(index);
    }

    useEffect(() => {
        setButtonStyle(pre => imgObj.index === active ? { ...pre, backgroundColor: "#faf" } : { ...pre, backgroundColor: "#0003" });
    }, [imgObj.index, active]);

    const el = (
        <li style={{ padding: "0px 10px" }}>
            <button onClick={() => changeHandler(imgObj.index)} style={buttonStyle}></button>
        </li>
    )

    return el;
}

export default Dots