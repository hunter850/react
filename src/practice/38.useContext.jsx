import React, { Fragment } from "react";
import Toolbar from "./components/38.Toolbar";


const themes = {
    light: {
        foreground: "#000",
        background: "#aaa"
    },
    dark: {
        foreground: "#aaa",
        background: "#000"
    }
}
//預設值 以ThemeContext.Provider的value為主
export const ThemeContext = React.createContext(themes.light);

const TryUseContext = () => {

    const el = (
        <Fragment>
            <ThemeContext.Provider value={themes}>
                <Toolbar />
            </ThemeContext.Provider>
        </Fragment>
    )

    return el;
}

export default TryUseContext