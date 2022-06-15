import UserGreeting from "./components/14.userGreeting"
import GuestGreeting from "./components/14.guestGreeting"
import { useState } from "react"

const ConditionalRender = () => {

    const [login, setLogin] = useState(false);

    const logout = () => {
        setLogin(() => false);
    }

    const signin = () => {
        setLogin(() => true);
    }

    if(login) {
        return (
            <div>
                <UserGreeting />
                <button onClick={logout}>logout</button>
            </div>
        )
    } else {
        return (
            <div>
                <GuestGreeting />
                <button onClick={signin}>login</button>
            </div>
        )
    }
}

export default ConditionalRender