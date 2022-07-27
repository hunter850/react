import Test from "./practice/Test";
import StateProvider from "./practice/contexts/StateProvider";
function App() {
    return (
        <StateProvider>
            <Test />
        </StateProvider>
    );
}

export default App;
