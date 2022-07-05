import { Fragment, useState } from "react"
import CardNumberInput from "./CardNumberInput"
import CardForm from "./CardForm"


const Creditcard = () => {

    const [cardNumber, setCardNumber] = useState("");

    const el =  (
        <Fragment>
            <div className="card_container" style={{ width: "433px", height: "272px", border: "1px solid black", borderRadius: "10px", margin: "auto", backgroundColor: "skyblue", position: "relative", zIndex: "1" }}>
                <CardNumberInput cardNumber={cardNumber} />
            </div>
            <div className="form_containter">
                <CardForm cardNumber={cardNumber} setCardNumber={setCardNumber} />
            </div>
        </Fragment>
    )

    return el;
}

export default Creditcard