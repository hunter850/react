import TryContextReducer from "./practice/63.TryContextReducer";
import StateProvider from "./practice/contexts/StateProvider";
function App() {
    return (
        <StateProvider>
            <TryContextReducer />
        </StateProvider>
    );
}

export default App;
