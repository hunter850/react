import { Fragment, useEffect, useState } from "react"
import { v4 } from "uuid"

const UseCallbackList = ({ getItems }) => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(getItems(3));
        console.log("Items updated");
    }, [getItems])
    
    const el = (
        <Fragment>
            {items.map(item => <div key={v4()}>{item}</div>)}
        </Fragment>
    )

    return el;
}

export default UseCallbackList