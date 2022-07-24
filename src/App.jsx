import TryContextCounter from "./practice/64.TryContextCounter";
import StateProvider from "./practice/contexts/StateProvider";
function App() {
    return (
        <StateProvider>
            <TryContextCounter />
        </StateProvider>
    );
}

export default App;
