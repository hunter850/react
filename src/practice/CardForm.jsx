import { Fragment } from "react"
import InputMask from "react-input-mask"

const CardForm = ({ cardNumber, setCardNumber, cardName, setCardName }) => {

    // const handleInput = ({ target: { value } }) => setCardNumber(value.trim());
    const handleNumberInput = (event) => {setCardNumber(event.target.value.trim())};
    const handleNameInput = (event) => {setCardName(event.target.value)};

    const submitHandler = (event) => {
        event.preventDefault();
    }

    const el = (
        <Fragment>
            <form onSubmit={submitHandler} style={{ margin: "-50px" }}>
                <div style={{ padding: "80px 26px 0px", width: "520px", margin: "auto", border: "1px solid black", borderRadius: "10px", backgroundColor: "#fff" }}>
                    <label htmlFor="card_number" style={{ marginBottom: "9px", display: "inline-block", fontSize: "20px" }}>卡號</label>
                    <InputMask
                        mask='9999999999999999'
                        value={cardNumber}
                        onChange={handleNumberInput}
                        maskChar={""}
                        style={{ height: "36px", fontSize: "16px", width: "100%", borderRadius: "3px", padding: "0px 9px", marginBottom: "20px" }}
                        id="card_number"
                    />
                    <label htmlFor="card_name" style={{ marginBottom: "9px", display: "inline-block", fontSize: "20px" }}>持卡人姓名</label>
                    <input
                        type="text"
                        id="card_name"
                        style={{ height: "36px", fontSize: "16px", width: "100%", borderRadius: "3px", padding: "0px 9px", marginBottom: "30px" }}
                        value={cardName}
                        onChange={handleNameInput}
                    />
                </div>
            </form>
        </Fragment>
    )

    return el;
}

export default CardForm