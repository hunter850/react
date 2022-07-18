import { Fragment, useState } from "react";
import Modal from "./coffee_compenents/Modal";
import ElementWrap from "./coffee_compenents/ElementWrap";

function Test() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Fragment>
            <button onClick={() => setIsOpen(true)}>click</button>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
                <Modal.Header>
                    <h1>header</h1>
                </Modal.Header>
                <Modal.Body>
                    <p>This is modal body</p>
                </Modal.Body>
                <Modal.Footer>
                    <h1>footer</h1>
                </Modal.Footer>
            </Modal>
        </Fragment>
    );
}

export default Test;
