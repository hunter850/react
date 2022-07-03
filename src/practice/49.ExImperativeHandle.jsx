import { Fragment, useState, useRef } from "react"
import ConfirmationModal from "./components/49.ConfirmationModal"

const ExImperativeHandle = () => {

    const [open, setOpen] = useState(false);
    const modalRef = useRef(null);

    const el = (
        <Fragment>
            <button onClick={() => setOpen(pre => !pre)}>Toggle</button>
            <button onClick={() => modalRef.current.focusCloseBtn()}>Focus Close</button>
            <button onClick={() => modalRef.current.focusConfirmBtn()}>Focus Confirm</button>
            <button onClick={() => modalRef.current.focusDenyBtn()}>Focus Deny</button>
            <ConfirmationModal
                ref={modalRef}
                open={open}
                onClose={() => setOpen(false)}
            />
        </Fragment>
    )

    return el;
}

export default ExImperativeHandle