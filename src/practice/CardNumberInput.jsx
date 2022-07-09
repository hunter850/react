import { Fragment, useState, useEffect, useMemo } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import useIndexArray from "./hooks/useIndexArray";

import "./css/cardNumberInput.css"

function CardNumberInput({ cardNumber }) {
    const fakeArray = useIndexArray(16);
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
                            <CSSTransition in={item.index < cardNumber.split("").length} timeout={500} classNames="text_span slide">
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

export default CardNumberInput;