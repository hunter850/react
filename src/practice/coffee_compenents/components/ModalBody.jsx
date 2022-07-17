import React, { Fragment } from "react";

function ModalBody(props) {
    const { children, component = "div", ...others } = props;
    if (component === null) {
        return React.createElement(Fragment, {}, children);
    } else {
        return React.createElement(component, { ...others }, children);
    }
}

export default ModalBody;
