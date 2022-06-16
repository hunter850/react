import { v4 } from "uuid"

const NumberList = ({ numbers }) => {
    const innerLi = numbers.map(number => <li key={v4()}>{number}</li>)

    const el = (
        <ul>
            {innerLi}
        </ul>
    )

    return el;
}

export default NumberList