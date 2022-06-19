import { useEffect, forwardRef } from "react";
import GrandChild from "./30.grandchild"

const ChildRef = forwardRef(({ children, passDown }, ref) => {

    useEffect(() => {
        console.log("child ref: ", ref.nodeRef);
        console.log("child ref: ", ref.nodeRef2);
        console.log("child ref: ", ref.nodeRef3);
        console.log("father ref: ", passDown);
    }, []);

    return (
        <GrandChild ref={ref} passDown={passDown}>
            {children}
        </GrandChild>
    )
})

export default ChildRef