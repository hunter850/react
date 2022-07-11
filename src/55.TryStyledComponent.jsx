import { Fragment, useState, useCallback } from "react";
import styled from "styled-components";

const MyButton = styled.button`
    padding: 0px;
    font-size: 24px;
    background-color: #faf;
    width: 200px;
    height: 200px;
    border: none;
    outline: none;
    cursor: pointer;
`;
const MyInput = styled.input`
    height: 36px;
    padding: 0px;
    padding-right: 9px;
`;
const MyText = styled.h1`
    font-size: 48px;
    color: red;
`;
function TryStyledComponent() {
    const [inputValue, setInputValue] = useState("");
    const inputHandler = useCallback((event) => {
        setInputValue(event.target.value);
    }, [setInputValue]);
    return (
        <Fragment>
            <MyButton
                onClick={() => {
                    console.log("my button");
                }}
            >
                This is my button
            </MyButton>
            <MyInput
                placeholder="my input"
                type="text"
                value={inputValue}
                onChange={inputHandler}
            />
            <MyText>{inputValue}</MyText>
        </Fragment>
    );
}

export default TryStyledComponent;
