import { useState } from "react"
const JsxExp = () => {
    function fullName(obj) {
        return obj.firstName + " " + obj.lastName;
    }

    const name = {
        firstName: "David",
        lastName: "Wang"
    }

    const [login, setLogin] = useState(true);

    const change = () => {
        setLogin(pre => !pre);
    }

    if (login) {
        return (
            <div>
                <h1>Hello {fullName(name)}</h1>
                <button onClick={change}>click to change</button>
            </div>
        )
    } else {
        return (
            <div>
                <h1>Hello Stranger</h1>
                <button onClick={change}>click to change</button>
            </div>
        )
    }
}

export default JsxExp