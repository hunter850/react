import { useState } from "react"
import BoilingVerdict from "./25.BoilingVerdict"

const TemperatureInput = ({ scale, temp, setTemp, setAnotherTemp }) => {

    const scaleName = {
        c: "Celsius",
        f: "Fahrenheit"
    }

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

    const inputHandler = (event) => {
        setTemp(() => event.target.value);
        if(scale === "c") {
            setAnotherTemp(() => tempConvert(event.target.value, toFahrenheit))
        } else if (scale === "f") {
            setAnotherTemp(() => tempConvert(event.target.value, toCelsius))
        }
    }

    const el = (
        <fieldset>
            <legend>Enter temperature in {scaleName[scale]}:</legend>
            <input type="number" value={temp} onInput={inputHandler} />
        </fieldset>
    )

    return el;
}

export default TemperatureInput