import { useState } from "react"
import TemperatureInput from "./components/25.TemperatureInput"
import BoilingVerdict from "./components/25.BoilingVerdict"

const LiftState = () => {

    const toCelsius = (fahrenheit) => {
        return (fahrenheit - 32) * 5 / 9;
    }
    const toFahrenheit = (celsius) => {
        return (celsius * 9 / 5) + 32;
    }

    const tempConvert = (temperature, convert) => {
        const input = parseFloat(temperature);
        if(Number.isNaN(input)) {
            return "";
        }
        const output = convert(temperature);
        const rounded = Math.round(output * 1000) / 1000;
        return rounded.toString();
    }

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