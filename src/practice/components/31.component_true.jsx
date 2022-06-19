import { useEffect } from "react";

const ComponentTrue = () => {

    useEffect(() => {
        console.log("true mount");

        return () => {
            console.log("true unmout");
        }
    }, []);

    const el = (
        <h1>True</h1>
    )

    return el;
}

export default ComponentTrue