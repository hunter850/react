import React from "react";
import { ThemeProvider } from "./components/39.ThemeContext";
import ContextChild from "./components/39.ContextChild";

export const ThemeContext = React.createContext()

const AdvanceUseContext = () => {

    const el = (
        <ThemeProvider>
            <ContextChild />
        </ThemeProvider>
    )

    return el;
}

export default AdvanceUseContext