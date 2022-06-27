import { Fragment } from "react"
import useScrollTo from "./hooks/useScrollTo";

const TryUseHook = () => {

    const scroll = useScrollTo();

    const el = (
        <Fragment>
            <div style={{height: "500vh"}}></div>
            <button style={{position: "fixed", left: "20px", bottom: "20px"}} onClick={() => scroll(0)}>click to hide</button>
        </Fragment>
    )

    return el;
}

export default TryUseHook