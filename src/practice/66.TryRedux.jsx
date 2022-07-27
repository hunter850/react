import { Fragment } from "react";
import useData from "./hooks/useData";
import useLog from "./hooks/useLog";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "../features/counterSlice";

function TryRedux() {
    const [state] = useData();
    const [persons, setPersons, resetPersons] = useData("persons");
    const count = useSelector((state) => state.counter);
    const dispatch = useDispatch();
    useLog(state.persons);
    return (
        <Fragment>
            <button
                onClick={() =>
                    setPersons([
                        ...persons,
                        {
                            name: "Jack",
                            age: 16,
                            gender: "male",
                            hobbies: ["gaming", "sleeping"],
                        },
                    ])
                }
            >
                add 1
            </button>
            <button
                onClick={() =>
                    setPersons((pre) => {
                        return [...pre, { a: "apple" }];
                    })
                }
            >
                pre
            </button>
            <button onClick={() => resetPersons()}>reset</button>
            <pre>{JSON.stringify(persons, null, 4)}</pre>
            <br />
            <hr />
            <button onClick={() => dispatch(decrement())}>redux minus 1</button>
            <button onClick={() => dispatch(increment())}>redux add 1</button>
            <button onClick={() => dispatch(incrementByAmount(-10))}>redux add 10</button>
            <button onClick={() => dispatch(incrementByAmount(10))}>redux add 10</button>
            <h1>{count.value}</h1>
        </Fragment>
    );
}

export default TryRedux;
