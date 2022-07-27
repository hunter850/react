import Child from "./components/65.Child";
import CartProvider from "./TryDux/CartProvider";

function TryDux() {
    return (
        <CartProvider>
            <Child />
        </CartProvider>
    );
}

export default TryDux;
