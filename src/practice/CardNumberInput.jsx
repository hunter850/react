import { Fragment, useState, useEffect } from "react"
import { CSSTransition, TransitionGroup } from "react-transition-group";

import "./css/cardNumberInput.css"

const CardNumberInput = ({ cardNumber }) => {

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
            pre.splice(0, cardNumber.split("").length, ...cardNumber.split(""));
            return [...pre];
        });
    }, [cardNumber]);

    return (
        <Fragment>
            <div className="card_number">
                <TransitionGroup>
                    {cardMask.map(item => (
                        <Fragment key={item.index}>
                            <CSSTransition in={item.index < cardNumber.split("").length} timeout={500} classNames="text_span slide">
                                <span className="text_span">{cardNumber.split("")[item.index] === undefined ? tempArray[item.index] : cardNumber.split("")[item.index]}</span>
                            </CSSTransition>
                        </Fragment>
                    ))}
                </TransitionGroup>
                <TransitionGroup>
                    {cardMask.map(item => (
                        <Fragment key={item.index}>
                            <CSSTransition in={item.index >= cardNumber.split("").length} timeout={500} classNames="slide">
                                <span>{item.content}</span>
                            </CSSTransition>
                        </Fragment>
                    ))}
                </TransitionGroup>
            </div>
        </Fragment>
    );
}

export default CardNumberInput