import { Fragment, useState, useTransition } from "react"
import{ v4 } from "uuid"

const TryUseTransition = () => {

    const [isPending, startTransition] = useTransition();
    const [input, setInput] = useState("");
    const [list, setList] = useState([]);

    const LIST_SIZE = 20000;

    const changeHandler = (e) => {
        //包在startTransition裡的會變成次要的 其他重要的會先render 等次要的跑好 才render次要的
        setInput(e.target.value);
        // const l = [];
        // for(let i = 0; i < LIST_SIZE; i++) {
        //     l.push(e.target.value);
        // }
        // setList(l);
        startTransition(() => {
            const l = [];
            for(let i = 0; i < LIST_SIZE; i++) {
                l.push(e.target.value);
            }
            setList(l);
        })
    }

    const el = (
        <Fragment>
            <input type="text" value={input} onChange={changeHandler} />
            {isPending ? "Loading..." : list.map(item => (
                <div key={v4()}>{item}</div>
            ))}
        </Fragment>
    )

    return el;
}

export default TryUseTransition