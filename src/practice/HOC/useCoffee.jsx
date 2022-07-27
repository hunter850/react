import { useCallback } from "react";
import { useWrapData } from "./HOCWrap";

function useCoffee(dataName) {
    const [state, dispatch] = useWrapData();
    const changeDataSetter = useCallback((updateData) => {
        dispatch({name: dataName, data: updateData})
    }, []);
    const deleteData = useCallback(() => {
        dispatch({type: "DELETE", name: dataName});
    }, []);
    if (dataName === undefined) {
        return [state, dispatch];
    }
    return [state[dataName], changeDataSetter, deleteData];
}

export default useCoffee;
