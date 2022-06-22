import { Fragment, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { v4 } from "uuid"
import "./css/34.transition_todolist.css"

const TransitionTodolist = () => {
    const [nameArray, setNameArray] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const inputHandler = (event) => {
        setInputValue(() => event.target.value);
    }

    const keyupHandler = (event) => {
        if (event.keyCode === 13) {
            setNameArray(pre => [...pre, {value: event.target.value, id: v4()}]);
            setInputValue(() => "");
        }
    }

    const deleteHandler = (id) => {
        setNameArray(pre => (
            pre.filter(item => item.id !== id)
        ))
    }

    //component={null}可以讓TransitionGroup預設的div wrap轉為無wrap
    const el = (
        <Fragment>
            <input type="text" value={inputValue} onInput={inputHandler} onKeyUp={keyupHandler} />
            <ul style={{ listStyleType: "none", padding: "0px" }}>
                <TransitionGroup component={null}>
                    {nameArray.map(item => (
                        <CSSTransition in={true} timeout={500} classNames="slide" key={item.id} unmountOnExit>
                            <li style={{ marginBottom: "10px" }}>
                                <span onClick={() => deleteHandler(item.id)} style={{
                                    backgroundColor: "red",
                                    textAlign: "center",
                                    display: "inline-block",
                                    width: "16px",
                                    height: "16px",
                                    lineHeight: "16px",
                                    padding: "5px",
                                    cursor: "pointer"
                                }}>X </span> {item.value}
                            </li>
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            </ul>
        </Fragment>
    )

    return el;
}

export default TransitionTodolist