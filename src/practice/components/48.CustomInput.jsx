import React, { Fragment, useImperativeHandle } from "react"

const CustomInput = ({style, value, onChange}, ref) => {

    useImperativeHandle(ref, () => ({
        alertHi: () => alert("Hi"),
        consoleHi: () => console.log("Hi"),
    }), []);

    const el = (
        <Fragment>
            <input
                type="text"
                value={value}
                onChange={onChange}
                style={{
                    border: "none",
                    backgroundColor: "lightpink",
                    pdding: ".25rem",
                    borderBottom: ".1rem solid balck",
                    borderTopRightRadius: ".25rem",
                    borderTopLeftRadius: ".25rem",
                    ...style,
                }}
            />
        </Fragment>
    )

    return el;
}

export default React.forwardRef(CustomInput)