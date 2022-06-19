import { useState, useEffect } from "react"
import { v4 } from "uuid"
import "./css/28.useEffect.css"
import ClickButton from "./components/28.click_button"

const TryUseEffect = () => {

    const displayStyle = {
        display: "none"
    }

    const [rawData, setRawData] = useState([]);
    const [displayStatus, setDisplayStatus] = useState(displayStyle)

    useEffect(() => {
        fetch("https://picsum.photos/v2/list?page=2&limit=10")
            .then(data => data.json())
            .then(data => {
                console.log("lorem picsum: ", data);
                setRawData(() => data);
                setDisplayStatus(pre => ({...pre, display: "flex"}));
            })
    }, [])

    const el = (
        <div>
            <ClickButton />
            <div className="img_container" style={displayStatus}>
                {rawData.map(item => (
                    <div className="card" key={v4()}>
                        <div className="img_wrap">
                            <img src={item.download_url} />
                        </div>
                        <p>author: {item.author}</p>
                    </div>
                ))}
            </div>
        </div>
    )

    return el;
}

export default TryUseEffect