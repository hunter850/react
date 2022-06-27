import { Fragment, useMemo, useState } from "react"

const PracticeUseMemo = () => {

    let [firstName, setFirstName] = useState("");
    const [lasttName, setLastName] = useState("");
    const fullName = useMemo(() => {
        return firstName + " " + lasttName;
    }, [firstName, lasttName])

    const el = (
        <Fragment>
            <input type="text" value={firstName} onInput={(event) => setFirstName(event.target.value)} />
            <input type="text" value={lasttName} onInput={(event) => setLastName(event.target.value)} />
            <h1>{firstName}</h1>
            <h1>{lasttName}</h1>
            <h1>{fullName}</h1>
        </Fragment>
    )

    return el;
}

export default PracticeUseMemo