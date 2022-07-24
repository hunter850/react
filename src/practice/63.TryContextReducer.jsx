import { Fragment, useCallback, useEffect, useState } from "react";
import { useControlData } from "./contexts/StateProvider";
import useData from "./hooks/useData";
import useLog from "./hooks/useLog";
import ContextReducerChild from "./components/63.ContextReducerChild";
const dataArray = ["Frank", "Alex", "John"];
function TryContextReducer() {
    const [state, dispatch] = useControlData();
    useLog(state);
    const [age, setAge, deleteAge] = useData("age");
    const addHandler = useCallback(() => {
        dispatch({ name: "name", data: "Frank" });
    }, []);
    const updataNameHandler = useCallback(() => {
        dispatch({ name: "name", data: "Alex" });
    }, []);
    const updateArrayHandler = useCallback(() => {
        dispatch({ name: "persons", data: dataArray });
    }, []);
    const pushAmyHandler = useCallback(() => {
        dispatch({ name: "persons", data: [...state.persons, "Amy"] });
    }, [state]);
    const deleteArrayHandler = useCallback(() => {
        dispatch({ type: "DELETE", name: "persons" });
    }, []);
    // useLog(age);
    return (
        <Fragment>
            <button onClick={addHandler}>add name Frank</button>
            <button onClick={updataNameHandler}>update name Alex</button>
            <button onClick={updateArrayHandler}>update array</button>
            <button onClick={pushAmyHandler}>push name Amy</button>
            <button onClick={deleteArrayHandler}>delete array</button>
            <button onClick={() => setAge(18)}>change age to 18</button>
            <button onClick={() => setAge(36)}>change age to 36</button>
            <button onClick={deleteAge}>delete age</button>
            <ContextReducerChild />
        </Fragment>
    );
}

export default TryContextReducer;
