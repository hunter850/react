import { Fragment, useState, useMemo, useEffect } from "react";

const slowFunction = (num) => {
    console.log("Calling slowFunction");
    for(let i = 0; i <= 1000000000; i++) {}
    return num * 2;
}

const TryUseMemo = () => {

    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);
    // const doubleNumber = slowFunction(number);

    //useMemo會把number的值存在記憶體 每次funciton component更新都會檢查number的值 不變就不執行useMemo裡的return 變了才執行
    //在這個範例 使用input改變數字會導致delay 但使用toggle button就會因為useMemo的number沒變化 所以theme的變化沒有delay
    const doubleNumber = useMemo(() => {
        return slowFunction(number);
    }, [number]);
    // const themeStyle = {
    //     backgroundColor: dark ? "black" : "white",
    //     color: dark ? "white" : "black"
    // }
    const themeStyle = useMemo(() => {
        return {
            backgroundColor: dark ? "black" : "white",
            color: dark ? "white" : "black"
        }
    }, [dark]);

    useEffect(() => {
        console.log("ThemeStyle reference changed");
    }, [themeStyle])

    const el = (
        <Fragment>
            <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))} />
            <button onClick={() => setDark(pre => !pre)}>Change Theme</button>
            <div style={themeStyle}>{doubleNumber}</div>
        </Fragment>
    )

    return el;
}

export default TryUseMemo