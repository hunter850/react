import store from "./app/store";
import { Provider } from "react-redux";
import Test from "./practice/Test";
import StateProvider from "./practice/contexts/StateProvider";
function App() {
    return (
        <Provider store={store}>
            <StateProvider>
                <Test />
            </StateProvider>
        </Provider>
    );
}

export default App;
