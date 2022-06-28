import { Fragment } from "react"
import useGSAPScroll from "./hooks/useGSAPScroll";

const TryUseHook = () => {

    const scroll = useGSAPScroll();

    const el = (
        <Fragment>
            <div style={{height: "500vh"}}></div>
            <button style={{position: "fixed", left: "20px", bottom: "20px"}} onClick={() => scroll(0, 1, "power2.out")}>click to hide</button>
        </Fragment>
    )

    return el;
}

export default TryUseHook