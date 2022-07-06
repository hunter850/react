import { Fragment, useState, useEffect, useMemo } from "react"
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { v4 } from "uuid";
import usePrevious from "./hooks/usePrevious"
import "./css/cardNumberInput.css"

const CardHolder = ({ cardName }) => {

    // const cardMask = useMemo(() => {
    //     return cardName.split("").map((item, index) => ({index}))
    // }, [cardName])

    const [cardMask, setCardMask] = useState([
        { content: "#", index: 0 },
        { content: "#", index: 1 },
        { content: "#", index: 2 },
        { content: "#", index: 3 },
        { content: "#", index: 4 },
        { content: "#", index: 5 },
        { content: "#", index: 6 },
        { content: "#", index: 7 },
        { content: "#", index: 8 },
        { content: "#", index: 9 },
        { content: "#", index: 10 },
        { content: "#", index: 11 },
        { content: "#", index: 12 },
        { content: "#", index: 13 },
        { content: "#", index: 14 },
        { content: "#", index: 15 },
    ])

    const [tempArray, setTempArray] = useState([]);

    useEffect(() => {
        setTempArray(pre => {
            let tempName = cardName.toUpperCase();
            pre.splice(0, tempName.split("").length, ...tempName.split(""));
            return [...pre];
        });
    }, [cardName]);

    const el = (
        <Fragment>
            <div className="card_name" style={{height: "32px"}}>
                <TransitionGroup className="card_name_split">
                    {cardMask.map(item => (
                        <Fragment key={item.index}>
                            <CSSTransition in={item.index < cardName.split("").length} timeout={500} classNames="text_span right">
                                <span className="text_span">{cardName.split("")[item.index] === undefined ? tempArray[item.index] : cardName.split("")[item.index].toUpperCase()}</span>
                            </CSSTransition>
                        </Fragment>
                    ))}
                </TransitionGroup>
            </div>
        </Fragment>
    )

    return el;
}

export default CardHolder