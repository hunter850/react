import { Fragment, useState } from "react";
import Modal from "./coffee_compenents/Modal";

function Test() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Fragment>
            <button onClick={() => setIsOpen(true)}>click</button>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
                <Modal.Body component={null}>
                    <h1>This is modal</h1>
                    <p>This is modal body</p>
                </Modal.Body>
            </Modal>
        </Fragment>
    );
}

export default Test;
