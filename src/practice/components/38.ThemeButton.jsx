import { Fragment, useContext, useEffect } from "react";
import { ThemeContext } from "../38.useContext";

const ThemeButton = () => {

    const themes = useContext(ThemeContext);

    useEffect(() => {
        console.log(themes.dark);
        console.log(themes.light);
    }, []);

    const el = (
        <Fragment>
            <button style={{backgroundColor: themes.dark.background, color: themes.dark.foreground}}>
                I am styled by theme context !
            </button>
        </Fragment>
    )

    return el;
}

export default ThemeButton