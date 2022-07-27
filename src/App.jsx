import store from "./app/store";
import { Provider } from "react-redux";
import TryRedux from "./practice/66.TryRedux.jsx";
import StateProvider from "./practice/contexts/StateProvider";
function App() {
    return (
        <Provider store={store}>
            <StateProvider>
                <TryRedux />
            </StateProvider>
        </Provider>
    );
}

export default App;
