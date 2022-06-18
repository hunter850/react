import { useState } from "react"

const MultiInput = () => {
    const formStyle = {
        width: "300px",
        margin: "20px auto",
        border: "1px solid black",
        borderRadius: "10px",
        padding: "40px"
    }

    const numberStyle = {
        display: "flex",
        flexDirection: "column"
    }

    const wrapStyle = {
        width: "320px",
        height: "180px",
        display: "none"
    }

    const imgStyle = {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        objectPosition: "center center"
    }

    const [isGoing, setIsGoing] = useState(true);
    const [numberOfGuests, setNumberOfGuests] = useState(0);
    const [src, setSrc] = useState("");
    const [answer, setAnswer] = useState("");
    const [displayStatus, setDisplayStatue] = useState(wrapStyle)


    const inputHandler = (event) => {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;

        if (name === "isGoing") {
            setIsGoing(() => value);
        } else if (name === "numberOfGuests") {
            setNumberOfGuests(() => value);
        }
    }

    const submitHandler = (event) => {
        event.preventDefault();
        fetch("https://yesno.wtf/api")
            .then(data => data.json())
            .then(data => {
                console.log(data);
                setSrc(() => data.image);
                setAnswer(() => data.answer);
                setDisplayStatue(pre => {
                    return {...pre, display: "block"}
                })
            })
    }

    const el = (
        <div>
            <form style={formStyle} onSubmit={submitHandler}>
                <input type="checkbox" name="isGoing" id="isGoing" checked={isGoing} onChange={inputHandler} />
                <label htmlFor="isGoing">isGoing</label>
                <br />
                <br />
                <div style={numberStyle}>
                    <label htmlFor="numberOfGuests">numberOfGuests</label>
                    <input type="number" name="numberOfGuests" id="numberOfGuests" value={numberOfGuests} onInput={inputHandler} />
                </div>
                <button type="submit">submit</button>
            </form>
            <div style={displayStatus}>
                <h1>{answer}</h1>
                <img style={imgStyle} src={src} alt={answer} />
            </div>
        </div>
    )

    return el;
}

export default MultiInput