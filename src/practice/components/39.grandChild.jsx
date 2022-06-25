import { Fragment,useContext } from "react";
import { ThemeContext, ThemeUpdateContext } from "./39.ThemeContext";

const ContextGrandChild = () => {

    const darkTheme = useContext(ThemeContext);
    const toggleTheme = useContext(ThemeUpdateContext);
    
    const themeStyle = {
        backgroundColor: darkTheme ? "#333" : "#ccc",
        color: darkTheme ? "#ccc" : "#333",
    }

    const el = (
        <Fragment>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <h1 style={themeStyle}>Hello Context</h1>
        </Fragment>
    )

    return el;
}

export default ContextGrandChild