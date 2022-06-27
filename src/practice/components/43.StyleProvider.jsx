import React, { useContext } from "react"

const theme = {
    backgroundColor: "#000",
    color: "#fff"
}

const ThemeContext = React.createContext();
export const useStyle = () => {
    return useContext(ThemeContext);
}

export const StyleProvider = ({children}) => {
    const el = (
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
    )

    return el;
}