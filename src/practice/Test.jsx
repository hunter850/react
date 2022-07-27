import { Fragment } from "react";
import useData from "./hooks/useData";
import useLog from "./hooks/useLog";

function Test() {
    const [state, dispatch] = useData();
    const [persons, setPersons, resetPersons] = useData("persons");
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
            <button onClick={() => setPersons((pre) => {
                return [...pre, {a: "apple"}];
            })}>pre</button>
            <button onClick={() => resetPersons()}>reset</button>
            <pre>{JSON.stringify(persons, null, 4)}</pre>
        </Fragment>
    );
}

export default Test;
