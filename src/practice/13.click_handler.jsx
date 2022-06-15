import { useState } from "react"

const ClickHandler = () => {

    const [on, setOn] = useState(true);
    
    const clicked = (num) => {
        console.log(num);
        setOn(pre => !pre);
    }

    const aConst = 9;

    //普通onClick={clicked} 若要傳入參數則使用onClick={() => clicked(aConst)}
    const el = (
        <div>
            <button onClick={() => clicked(aConst)}>click to change</button>
            <h1>
                {on ? "ON" : "OFF"}
            </h1>
        </div>
    )
    return el;
}

export default ClickHandler