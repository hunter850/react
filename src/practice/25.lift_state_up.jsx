import { useState } from "react"
import TemperatureInput from "./components/25.TemperatureInput"
import BoilingVerdict from "./components/25.BoilingVerdict"

const LiftState = () => {

    const [celsius, setCelsius] = useState("");
    const [fahrenheit, setFahrenheit] = useState("");

    const el = (
        <div>
            <TemperatureInput scale="c" setTemp={setCelsius} temp={celsius} setAnotherTemp={setFahrenheit} />
            <TemperatureInput scale="f" setTemp={setFahrenheit} temp={fahrenheit} setAnotherTemp={setCelsius} />
            <BoilingVerdict celsius={parseFloat(celsius)} />
        </div>
    )

    return el;
}

export default LiftState