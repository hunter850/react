import { Fragment } from "react";

const CardType = () => {
    const el = (
        <Fragment>
            <div style={{width: "85px", height: "45px"}}>
                <img style={{width: "100%", height: "100%", objectFit: "cover", objectPosition: "center center"}} src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/visa.png" alt="" />
            </div>
        </Fragment>
    )

    return el;
}

export default CardType