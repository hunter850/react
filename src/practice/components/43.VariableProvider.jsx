import React, { useContext } from "react";

const person = {
    firstName: "David",
    lastName: "Wang",
    age: 24,
    gender: "male"
}

const PersonVariable = React.createContext()

export const usePersonVariable = () => {
    return useContext(PersonVariable);
}
export const VariableProvider = ({ children }) => {
    const el = (
        <PersonVariable.Provider value={person}>
            {children}
        </PersonVariable.Provider>
    )

    return el;
}

