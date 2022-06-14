import React from "react"

const WritingWays = () => {

    const el1 = (
        <h1 className="greeting">
            Hello World
        </h1>
    );

    const el2 = React.createElement(
        "h1",
        { className: "greeting" },
        "Hello World"
    );
    //React.createElement() 會幫助檢查bug但會產生如下的物件
    /*
    const element = {
        type: 'h1',
        props: {
            className: 'greeting',
            children: 'Hello, world!'
        }
    };
    */

    return el2;
}

export default WritingWays