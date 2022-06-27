import { VariableProvider } from "./components/43.VariableProvider";
import VariableChild from "./components/43.VariableChild";

const YourHook = () => {
    const el = (
        <VariableProvider>
            <VariableChild />
        </VariableProvider>
    )

    return el;
}

export default YourHook