import { Fragment, useState, useCallback } from "react";
import UseCallbackList from "./components/41.List";

const TryUseCallback = () => {

    const [number, setNumber] = useState(1);
    const [dark, setDark] = useState(false);

    // const getItems = () => {
    //     return [number, number + 1, number + 2];
    // };
    //useCallback 與useMemo一樣可以偵測[]中的值變動與否決定該部分是否重render
    //與useMemo不同 useCallback回傳的是useCallback後的整個function所以getItems 還能帶參數
    const getItems = useCallback((incrementor) => {
        return [number + incrementor, number + 1  + incrementor, number + 2 + incrementor];
    }, [number]);

    const theme = {
        backgroundColor: dark ? "#333" : "#fff",
        color: dark ? "#fff" : "#333"
    }

    const el = (
        <Fragment>
            <div style={theme}>
                <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))} />
                <button onClick={() => setDark(pre => !pre)}>Toggle theme</button>
                <UseCallbackList getItems={getItems} />
            </div>
        </Fragment>
    )

    return el;
}

export default TryUseCallback