import { Fragment } from "react"
import InputMask from "react-input-mask"

const CardForm = ({cardNumber, setCardNumber}) => {

    // const handleInput = ({ target: { value } }) => setCardNumber(value.trim());
    const handleInput = (event) => setCardNumber(event.target.value.trim());

    const submitHandler = (event) => {
        event.preventDefault();
    }

    const el = (
        <Fragment>
            <form onSubmit={submitHandler} style={{ margin: "-50px" }}>
                <div style={{ padding: "80px 26px 0px", width: "50%", margin: "auto", border: "1px solid black", borderRadius: "10px" }}>
                    <label htmlFor="card_number" style={{ marginBottom: "14px", display: "inline-block", fontSize: "20px" }}>卡號</label>
                    <InputMask
                        mask='9999999999999999'
                        value={cardNumber}
                        onChange={handleInput}
                        maskChar={""}
                        style={{ height: "36px", fontSize: "16px", width: "100%", borderRadius: "3px", padding: "0px 18px" }}
                        id="card_number"
                    />
                </div>
            </form>
        </Fragment>
    )

    return el;
}

export default CardForm