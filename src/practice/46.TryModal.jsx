import { Fragment, useState } from "react"
import Modal from "./coffee_compenents/Modal";

const TryModal = () => {

    const [isOpen, setIsOpen] = useState(false);

    const clickHandler = () => {
        setIsOpen(true);
    }

    const el = (
        <Fragment>
            <button onClick={clickHandler}>click to open modal</button>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} bordPadding={"50px 100px"} time={5} bordY={-500}>
                <h1 style={{margin: "0px"}}>This is modal</h1>
                <p>你想放的內容都放在Modal標籤內</p>
                <button>確認</button>
                <button>取消</button>
            </Modal>
        </Fragment>
    )

    return el;
}

export default TryModal