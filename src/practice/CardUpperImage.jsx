import { Fragment } from "react";
import Chip from "./Chip";
import CardType from "./CardType";

const CardUpperImage = () => {
    const el = (
        <Fragment>
            <div style={{display: "flex", justifyContent: "space-between", width: "340.48px"}}>
                <Chip />
                <CardType />
            </div>
        </Fragment>
    )

    return el;
}

export default CardUpperImage