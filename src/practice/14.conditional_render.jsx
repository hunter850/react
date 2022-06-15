import UserGreeting from "./components/14.userGreeting"
import GuestGreeting from "./components/14.guestGreeting"
import { useState } from "react"

const ConditionalRender = () => {

    const [login, setLogin] = useState(false);

    const changeLoginStatus = () => {
        setLogin(pre => !pre);
    }

    if(login) {
        return (
            <div>
                <UserGreeting />
                <button onClick={changeLoginStatus}>logout</button>
            </div>
        )
    } else {
        return (
            <div>
                <GuestGreeting />
                <button onClick={changeLoginStatus}>login</button>
            </div>
        )
    }
}

export default ConditionalRender