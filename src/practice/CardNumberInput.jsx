import { Fragment, useState, useEffect, useMemo } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import useIndexArray from "./hooks/useIndexArray";
import useLog from "./hooks/useLog"

import "./css/cardNumberInput.css"

function CardNumberInput({ cardNumber }) {
    const isShort = useMemo(() => {
        return (cardNumber[0] === "3" && (cardNumber[1] === "4" || cardNumber[1] === "7"));
    }, [cardNumber]);
    const maxLength = useMemo(() => {
        if(isShort) {
            return 15;
        } else {
            return 16;
        }
    }, [isShort]);
    const fakeArray = useIndexArray(maxLength);
    const cardMask = useMemo(() => {
        const tempArray = JSON.parse(JSON.stringify(fakeArray));
        for(let i = 0; i < tempArray.length; i++) {
            tempArray[i].content = "#";
        }
        return tempArray;
    }, [fakeArray]);
    const [tempArray, setTempArray] = useState([]);

    useEffect(() => {
        setTempArray(pre => {
            pre.splice(0, cardNumber.length, ...cardNumber.split(""));
            return [...pre];
        });
    }, [cardNumber]);

    return (
        <Fragment>
            <div className="card_number">
                <TransitionGroup>
                    {cardMask.map(item => (
                        <Fragment key={item.index}>
                            <CSSTransition in={item.index < cardNumber.length} timeout={500} classNames="text_span slide">
                                <span className="text_span">
                                    {cardNumber.split("")[item.index] === undefined ?
                                    tempArray[item.index] :
                                    cardNumber.split("")[item.index]
                                    }
                                </span>
                            </CSSTransition>
                        </Fragment>
                    ))}
                </TransitionGroup>
                <TransitionGroup>
                    {cardMask.map(item => (
                        <Fragment key={item.index}>
                            <CSSTransition in={item.index >= cardNumber.length && !(Number.isNaN(parseInt(item.index)))} timeout={500} classNames="slide">
                                <span>{item.content}</span>
                            </CSSTransition>
                        </Fragment>
                    ))}
                </TransitionGroup>
            </div>
        </Fragment>
    );
}

export default CardNumberInput;