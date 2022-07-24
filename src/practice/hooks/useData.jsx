import { useCallback } from "react";
import { useControlData } from "../contexts/StateProvider";

function useData(dataName) {
    const [state, dispatch] = useControlData();
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

export default useData;
