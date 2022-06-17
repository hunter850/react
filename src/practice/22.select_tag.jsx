import { useState } from "react"

const SelectTag = () => {

    const formStyle = {
        display: "flex",
        flexDirection: "column",
        width: "300px",
        margin: "50px auto",
        border: "1px solid black",
        borderRadius: "10px",
        padding: "40px"
    }

    const marginStyle = {
        marginBottom: "20px"
    }

    const [inputValue, setInputValue] = useState("");

    const changeHandler = (event) => {
        setInputValue(() => event.target.value);
    }

    const el = (
        <form style={formStyle}>
            <label htmlFor="flavor" style={marginStyle}>flavor</label>
            <select name="flavor" id="flavor" value={inputValue} onChange={changeHandler} style={marginStyle}>
                <option value="" disabled>-- 請選擇一項 --</option>
                <option value="grapefruit">grapefruit</option>
                <option value="lime">lime</option>
                <option value="coconut">coconut</option>
                <option value="mango">mango</option>
            </select>
            <div>
                <button type="submit">submit</button>
            </div>
        </form>
    );

    return el;
}

export default SelectTag