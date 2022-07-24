export default function reducer(state, action) {
    if (action.type === undefined) action.type = "POST";
    if (state[action.name] === action.data) return state;
    switch (action.type) {
        case "POST":
            return { ...state, [action.name]: action.data };
        case "DELETE":
            if (state[action.name] === undefined) return state;
            const newState = { ...state };
            delete newState[action.name];
            return newState;
        default:
            return state;
    }
}