import { useRef, useEffect, createRef, Fragment } from "react"
import ChildRef from "./components/30.child_ref"

const PassRef = () => {

    const nodeRef = useRef(null);
    const nodeRef2 = useRef(null);
    const nodeRef3 = createRef(null);
    const fatherRef = useRef(null);

    useEffect(() => {
        console.log("parent ref: ", nodeRef);
        console.log("parent ref2: ", nodeRef2)
        console.log("parent ref3: ", nodeRef3)
    }, []);

    const el = (
        <Fragment>
            <span ref={fatherRef}>father</span>
            <ChildRef ref={{nodeRef, nodeRef2, nodeRef3}} passDown={fatherRef}>Click me !</ChildRef>
        </Fragment>
    )

    return el;
}

export default PassRef