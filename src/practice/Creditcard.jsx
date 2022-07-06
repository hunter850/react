import { Fragment, useState } from "react"
import CardUpperImage from "./CardUpperImage"
import CardNumberInput from "./CardNumberInput"
import CardHolder from "./CardHolder"
import CardValidDate from "./CardValidDate"
import CardForm from "./CardForm"


const Creditcard = () => {

    const [cardNumber, setCardNumber] = useState("");
    const [cardName, setCardName] = useState("");

    const el = (
        <Fragment>
            <div className="card_container" style={{ width: "433px", aspectRatio: "16 / 9", borderRadius: "10px", margin: "auto", backgroundColor: "skyblue", position: "relative", zIndex: "1", display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center", padding: "25px 15px", boxShadow: "4px 4px 16px 0px rgba(0,0,0,.25)" }}>
                <CardUpperImage />
                <CardNumberInput cardNumber={cardNumber} />
                <div className="card_bottom" style={{display: "flex", justifyContent: "space-between", width: "340.47px", height: "32px"}}>
                    <CardHolder cardName={cardName} />
                    <CardValidDate />
                </div>
            </div>
            <div className="form_containter">
                <CardForm
                    cardNumber={cardNumber}
                    setCardNumber={setCardNumber}
                    cardName={cardName}
                    setCardName={setCardName}
                />
            </div>
        </Fragment>
    )

    return el;
}

export default Creditcard