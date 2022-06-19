import { forwardRef, useEffect } from "react";

const GrandChild = forwardRef(({ children, passDown }, ref) => {

    useEffect(() => {
        console.log("grandchild ref: ", ref.nodeRef);
        console.log("grandchild ref2: ", ref.nodeRef2);
        console.log("grandchild ref3: ", ref.nodeRef3);
        console.log("grandfather ref: ", passDown)
    }, []);

    return (
        <div>
            <button ref={ref.nodeRef}>{children}</button>
            <h1 ref={ref.nodeRef2}>{children}</h1>
            <p ref={ref.nodeRef3}>{children}</p>
        </div>
    )
})

export default GrandChild