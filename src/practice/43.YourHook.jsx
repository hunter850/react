import { VariableProvider } from "./components/43.VariableProvider";
import { StyleProvider } from "./components/43.StyleProvider";
import VariableChild from "./components/43.VariableChild";

const YourHook = () => {
    const el = (
        <StyleProvider>
            <VariableProvider>
                <VariableChild />
            </VariableProvider>
        </StyleProvider>
    )

    return el;
}

export default YourHook