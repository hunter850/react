import { Fragment } from "react"
import { v4 } from "uuid"
import useArray from "./hooks/useArray"

const TryArray = () => {

    const arrayObj = useArray([1, 2, 3, 4, 6, 7, 8, 9]);

    const el = (
        <Fragment>
            <button onClick={() => arrayObj.cpush(10)}>push(10)</button>
            <button onClick={() => arrayObj.cpop()}>pop</button>
            <button onClick={() => arrayObj.cunshift(10)}>unshift(10)</button>
            <button onClick={() => arrayObj.cshift()}>shift</button>
            {arrayObj.value.map(item => (<h1 key={v4()}>{item}</h1>))}
            <br /><hr /><br />
            {arrayObj.cmap(item => (<h1 key={v4()}>{item}</h1>))}
            <br /><hr /><br />
        </Fragment>
    )

    return el;
}

export default TryArray