import { Fragment, useState } from "react";
import CardUpperImage from "./CardUpperImage";
import CardNumberInput from "./CardNumberInput";
import CardHolder from "./CardHolder";
import CardValidDate from "./CardValidDate";
import CardForm from "./CardForm";

function Creditcard() {
    const [cardNumber, setCardNumber] = useState("");
    const [cardName, setCardName] = useState("");
    const [cardMonth, setCardMonth] = useState("");
    const [cardYear, setCardYear] = useState("");
    const [cardCvv, setCardCvv] = useState("");

    const cardContainterStyle = {
        width: "433px",
        aspectRatio: "16 / 9",
        borderRadius: "10px",
        margin: "auto",
        backgroundColor: "skyblue",
        position: "relative",
        zIndex: "1",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "25px 15px",
        boxShadow: "4px 4px 16px 0px rgba(0,0,0,.25)",
    };
    const cardBottomStyle = {
        display: "flex",
        justifyContent: "space-between",
        width: "340.47px",
        height: "32px",
    };

    return (
        <Fragment>
            <div className="card_container" style={cardContainterStyle}>
                <CardUpperImage />
                <CardNumberInput cardNumber={cardNumber} />
                <div className="card_bottom" style={cardBottomStyle}>
                    <CardHolder cardName={cardName} />
                    <CardValidDate cardMonth={cardMonth} cardYear={cardYear} />
                </div>
            </div>
            <div className="form_containter">
                <CardForm
                    cardNumber={cardNumber}
                    setCardNumber={setCardNumber}
                    cardName={cardName}
                    setCardName={setCardName}
                    cardMonth={cardMonth}
                    setCardMonth={setCardMonth}
                    cardYear={cardYear}
                    setCardYear={setCardYear}
                    cardCvv={cardCvv}
                    setCardCvv={setCardCvv}
                />
            </div>
        </Fragment>
    );
}

export default Creditcard;
