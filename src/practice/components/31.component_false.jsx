import { useEffect } from "react";

const ComponentFalse = () => {

    useEffect(() => {
        console.log("false mount");

        return () => {
            console.log("false unmout");
        }
    }, []);

    const el = (
        <h1>False</h1>
    )

    return el;
}

export default ComponentFalse