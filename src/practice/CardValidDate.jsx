import "./css/cardNumberInput.css";

function CardValidDate({ cardMonth, cardYear }) {
    return (
        <div>
            <span style={{ fontSize: "20px" }}>MM</span>
            <span style={{ fontSize: "20px" }}> / </span>
            <span style={{ fontSize: "20px" }}>YY</span>
        </div>
    );
}

export default CardValidDate;
