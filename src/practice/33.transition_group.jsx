import { Fragment, useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./css/33.transition_group.css"

const TransitionGroup = () => {

    const [isShow, setIsShow] = useState(false);

    const changeStatus = () => {
        setIsShow(pre => !pre);
    }

    const el = (
        <Fragment>
            <button onClick={changeStatus}>click to change status</button>
            <CSSTransition in={isShow} timeout={1000} classNames="slide">
                <h1>Hello React</h1>
            </CSSTransition>
        </Fragment>
    )

    return el;
}

export default TransitionGroup