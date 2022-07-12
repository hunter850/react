import React, {
    useContext,
    useMemo,
    useCallback,
    useState,
    useEffect,
} from "react";

const StyleContext = React.createContext();
const BreakContext = React.createContext();
export function useStyle() {
    return useContext(StyleContext);
}
export function useBreak() {
    return useContext(BreakContext);
}
function StyleProvider({ children }) {
    const [form, setForm] = useState(0);
    const breakPoint = useCallback(() => {
        if (window.innerWidth <= 375) {
            setForm(1);
        } else {
            setForm(0);
        }
    }, []);
    const styles = useMemo(() => {
        return {
            color: "#fff",
            backgroundColor: "#000",
        };
    }, []);
    useEffect(() => {
        window.addEventListener("resize", breakPoint);
        return () => window.removeEventListener("resize", breakPoint);
    }, []);
    return (
        <BreakContext.Provider value={form}>
            <StyleContext.Provider value={styles}>
                {children}
            </StyleContext.Provider>
        </BreakContext.Provider>
    );
}

export default StyleProvider;
