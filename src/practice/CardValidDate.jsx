import "./css/cardNumberInput.css"

const CardValidDate = ({cardMonth, cardYear}) => {
    const el = (
        <div>
            <span style={{fontSize: "20px"}}>MM</span>
            <span style={{fontSize: "20px"}}> / </span>
            <span style={{fontSize: "20px"}}>YY</span>
        </div>
    )

    return el;
}

export default CardValidDate