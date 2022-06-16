import WarningBanner from "./components/17warning_banner"
import { useState } from "react"

const PreventCpRender = () => {

    const [showWarning, setShowWarning] = useState(false);

    const changeHandler = () => {
        setShowWarning(pre => !pre);
    }

    const el = (
        <div>
            <button onClick={changeHandler}>
                {showWarning ? "Hide" : "Show"}
            </button>
            <WarningBanner showWarning={showWarning}  />
        </div>
    )

    return el;
}

export default PreventCpRender