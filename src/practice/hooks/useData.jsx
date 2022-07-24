import { useCallback } from "react";
import { useControlData } from "../contexts/StateProvider";

function useData(dataName) {
    const [state, dispatch] = useControlData();
    if (dataName === undefined) {
        return [state, dispatch];
    }
    const changeDataSetter = useCallback((updateData) => {
        dispatch({name: dataName, data: updateData})
    }, []);
    const deleteData = useCallback(() => {
        dispatch({type: "DELETE", name: dataName});
    }, []);
    return [state[dataName], changeDataSetter, deleteData];
}

export default useData;
