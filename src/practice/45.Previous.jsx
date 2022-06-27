import { Fragment, useState, useRef, useEffect, useCallback } from "react"
import usePrevious from "./hooks/usePrevious";

const Previous = () => {

    const [count,setCount] = useState(0);
    const [obj, setObj] = useState({name: "David"});

    const preCountRef = useRef(null);

    //useCallback會回傳整個function所以usePrevious會剛好能在監聽某個值改變才把前一個值賦予給變數
    const prevCount = useCallback(usePrevious(count), [count]);
    const prevObj = useCallback(usePrevious(obj), [obj]);

    //因為useEffect是在渲染後才執行 所以preCount會先拿到之前的數字 然後螢幕更新渲染後preCountRef.current才拿到新的count值
    useEffect(() => {
        preCountRef.current = count;
    }, [count]);

    const preCount = preCountRef.current;

    const el = (
        <Fragment>
            <button onClick={() => setCount(count + 1)}>Click to add</button>
            <button onClick={() => setObj(pre => ({...pre, age: 18}))}>Click to change obj</button>
            <h1>Now: {count}</h1>
            <h1>Pre, useRef: {preCount}</h1>
            <h1>usePrevious: {prevCount}</h1>
            <h1>obj: {JSON.stringify(obj)}</h1>
            <h1>preObj, usePrevious: {JSON.stringify(prevObj)}</h1>
        </Fragment>
    )

    return el;
}

export default Previous