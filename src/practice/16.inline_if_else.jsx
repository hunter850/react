import { useState } from "react"

const InlineIfElse = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const changeLoginStatue = () => {
        setIsLoggedIn(pre => !pre);
    }

    const el = (
        <div>
            <h1>
                The user is {isLoggedIn ? "currently" : "not"} logged in
            </h1>
            <button onClick={changeLoginStatue}>{isLoggedIn ? "logout" : "login"}</button>
        </div>
    )

    return el;
}

export default InlineIfElse