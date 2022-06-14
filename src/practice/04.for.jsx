import { v4 } from "uuid"

const ForLoop = () => {
    const data = ["David", "Frank", "Amy", "Alex", "Bob"]

    const el = (
        <ul>
            {data.map(item => <li key={v4()}>{item}</li>)}
        </ul>
    )
    return el;
}

export default ForLoop