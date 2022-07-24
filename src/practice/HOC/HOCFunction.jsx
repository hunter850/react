import { useReducer } from "react";

function HOCFunction(CustomContext, reducer, initData) {
    return function (props) {
        const { children } = props;
        const [state, dispatch] = useReducer(reducer, initData);
        return (
            <CustomContext.Provider value={[state, dispatch]}>
                {children}
            </CustomContext.Provider>
        );
    };
}

export default HOCFunction;
