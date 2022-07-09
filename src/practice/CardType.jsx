import { Fragment } from "react";

function CardType() {
    const cardTypeImageWrap = { width: "85px", height: "45px" };

    const cardTypeStyle = {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        objectPosition: "center center",
    };

    return (
        <Fragment>
            <div style={cardTypeImageWrap}>
                <img
                    style={cardTypeStyle}
                    src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/visa.png"
                    alt="VISA card"
                />
            </div>
        </Fragment>
    );
}

export default CardType;
