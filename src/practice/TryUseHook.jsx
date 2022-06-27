import { Fragment } from "react"
import useToggleScroll from "./hooks/useToggleScroll";

const TryUseHook = () => {

    const toggleScroll = useToggleScroll();

    const el = (
        <Fragment>
            <div style={{height: "500vh"}}></div>
            <button style={{position: "fixed", left: "20px", bottom: "20px"}} onClick={toggleScroll}>click to hide</button>
        </Fragment>
    )

    return el;
}

export default TryUseHook