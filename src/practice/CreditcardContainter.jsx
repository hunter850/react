import { Fragment, useState } from "react";
import Creditcard from "./Creditcard";

function CreditcarContainer() {
    const [cardNumber, setCardNumber] = useState("");
    const [cardName, setCardName] = useState("");
    const [cardMonth, setCardMonth] = useState("");
    const [cardYear, setCardYear] = useState("");
    const [cardCvv, setCardCvv] = useState("");
    const cardSubmitHandler = (event) => {
        console.log(event);
        event.preventDefault();
    };

    const fakeBodyStyle = {
        width: "100vw",
        height: "100vh",
        backgroundColor: "#FCFAF7",
    };
    const fakeNav = {
        width: "100%",
        height: "60px",
        backgroundColor: "#253945",
        marginBottom: "50px",
    };
    const containter = { padding: "0px 200px" };

    return (
        <Fragment>
            <div className="fake_body" style={fakeBodyStyle}>
                <div style={fakeNav}>nav</div>
                <div style={containter}>
                    <div style={{ width: "fit-content", margin: "auto" }}>
                        <Creditcard
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
                            cardSubmitHandler={cardSubmitHandler}
                        />
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default CreditcarContainer;
