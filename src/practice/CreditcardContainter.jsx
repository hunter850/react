import { Fragment } from "react"
import Creditcard from "./Creditcard";

const CreditcarContainer = () => {
    const el = (
        <Fragment>
            <div style={{padding: "0px 200px"}}>
                <Creditcard />
            </div>
        </Fragment>
    )

    return el;
}

export default CreditcarContainer