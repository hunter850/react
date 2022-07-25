import { Fragment } from "react";
// import { useWrapData } from "../HOC/HOCWrap";
// import useCoffee from "../HOC/useCoffee";
import { useCart } from "../TryDux/CartProvider";

function Child() {
    const [count, setCount] = useCart("count");
    const [persons, setPersons] = useCart("persons");
    function addPersonHandler() {
        setPersons([...persons, { name: "Frank", age: 18, gender: "male" }]);
    }
    return (
        <Fragment>
            <h1 onClick={() => setCount(count + 1)}>{count}</h1>
            <br /><br /><hr />
            <button onClick={addPersonHandler}>add person</button>
            <h1>{JSON.stringify(persons)}</h1>
        </Fragment>
    );
}

export default Child;
