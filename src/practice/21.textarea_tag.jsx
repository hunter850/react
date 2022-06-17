import { useState } from "react"


const TextareaTag = () => {

    const [inputValue, setInputValue] = useState("Please write an essay about your favorite DOM element.");
    
    const inputHandler = (event) => {
        setInputValue(() => event.target.value);
    }
    
    console.log(inputValue);

    const submitHandler = (event) => {
        event.preventDefault();
        console.log("A essay was submitted: " + inputValue)
    }

    const el = (
        <form onSubmit={submitHandler}>
            <label htmlFor="essay">essay</label>
            <textarea name="essay" id="essay" cols="30" rows="10" value={inputValue} onInput={inputHandler}></textarea>
            <button type="submit">submit</button>
        </form>
    )

    return el;
}

export default TextareaTag