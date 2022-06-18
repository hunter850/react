import { useState, useEffect } from "react"

const TryUseEffect = () => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You click ${count} times`;
        console.log(count);
    });

    const el = (
        <div>
            <p>You click {count} times</p> 
            <button onClick={() => setCount(count + 1)}>Click to add</button>
        </div>
    )

    return el;
}

export default TryUseEffect