import { useState } from "react"
import ChangeNumber from "./components/23.change_number"

const Try = () => {
    const myObj = {id:1, name: "David", gender: "male", age: 24, number: 40}

    const [obj, setObj] = useState(myObj);

    const el = (
        <div>
            <h1>{obj.number}</h1>
            <ChangeNumber setObj={setObj} />
        </div>
    )

    return el;
}

export default Try