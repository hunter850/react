import StateWrap from "./HOC/HOCWrap";
import Child from "./components/65.Child";

function TryHOC() {
    return (
        <StateWrap>
            <Child />
        </StateWrap>
    );
}

export default TryHOC;
