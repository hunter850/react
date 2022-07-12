import Child from "./components/57.Child";
import StyleProvider from "./components/57.StyleProvider";

function CustomContext() {
    return (
        <StyleProvider>
            <Child />
        </StyleProvider>
    );
}

export default CustomContext;