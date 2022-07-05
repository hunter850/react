import { Fragment, useEffect } from "react"
import { v4 } from "uuid"
import useArray from "./hooks/useArray"
import useSetNow from "./hooks/useSetNow"

const TryArray = () => {

    const arrayObj = useArray([1, 2, 3, 4, 6, 7, 8, 9]);
    // const setNow = useSetNow();

    // useEffect(() => {
    //     arrayObj.cselect(item => item <= 5);
    // }, []);

    const el = (
        <Fragment>
            <button onClick={() => arrayObj.cpush(10)}>push(10)</button>
            <button onClick={() => arrayObj.cpop()}>pop</button>
            <button onClick={() => arrayObj.cunshift(10)}>unshift(10)</button>
            <button onClick={() => arrayObj.cshift()}>shift</button>
            <button onClick={() => arrayObj.creverse()}>reverse</button>
            <br />
            <span>value.map</span>
            {arrayObj.value.map(item => (<h1 key={v4()}>{item}</h1>))}
            <br /><hr /><br />
            <span>cmap</span>
            {arrayObj.cmap(item => (<h1 key={v4()}>{item}</h1>))}
            <br /><hr /><br />
            <span>value.filter.map</span>
            {arrayObj.value.filter(item => item <= 5).map(item => (<h1 key={v4()}>{item}</h1>))}
            <br /><hr /><br />
            <span>value.cfilter.map</span>
            {arrayObj.cfilter(item => item <=5).map(item => (<h1 key={v4()}>{item}</h1>))}
        </Fragment>
    )

    return el;
}

export default TryArray