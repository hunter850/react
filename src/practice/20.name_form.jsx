import { useState } from "react"

const NameForm = () => {

    const [inputValue, setInputValue] = useState("");

    const changeHandler = (event) => {
        setInputValue(() => event.target.value);
    }
    
    console.log(inputValue);
    
    const submitHandler = (event) => {
        event.preventDefault();
        console.log("A name was submitted: " + inputValue);
    }
    
    const el = (
        <form onSubmit={submitHandler}>
            <label htmlFor="name">name</label>
            <input type="text" name="name" id="name" value={inputValue} onInput={changeHandler} />
            <button type="submit">submit</button>
        </form>
    )
    return el;
}

export default NameForm