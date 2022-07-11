import { Fragment, useState, useMemo } from "react";

function TryMemoCount() {
    const [count, setCount] = useState(0);
    const count2 = useMemo(() => {
        return count + 1;
    }, [count]);
    const count3 = useMemo(() => {
        return count2 + 1;
    }, [count2]);
    const count4 = useMemo(() => {
        return count3 + 1;
    }, [count3]);
    const count5 = useMemo(() => {
        return count4 + 1;
    }, [count4]);
    const count6 = useMemo(() => {
        return count5 + 1;
    }, [count5]);
    const count7 = useMemo(() => {
        return count6 + 1;
    }, [count6]);
    const count8 = useMemo(() => {
        return count7 + 1;
    }, [count7]);
    const count9 = useMemo(() => {
        return count8 + 1;
    }, [count8]);
    const count10 = useMemo(() => {
        return count9 + 1;
    }, [count9]);
    const count11 = useMemo(() => {
        return count9 + count10 + 1;
    }, [count9, count10]);
    return (
        <Fragment>
            <button
                onClick={() => {
                    setCount(count + 1);
                }}
            >
                click
            </button>
            <h1>{count}</h1>
            <h1>{count2}</h1>
            <h1>{count3}</h1>
            <h1>{count4}</h1>
            <h1>{count5}</h1>
            <h1>{count6}</h1>
            <h1>{count7}</h1>
            <h1>{count8}</h1>
            <h1>{count9}</h1>
            <h1>{count10}</h1>
            <h1>{count11}</h1>
        </Fragment>
    );
}

export default TryMemoCount;
