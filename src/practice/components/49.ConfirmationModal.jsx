import React, { Fragment, useImperativeHandle, useRef } from "react"
import "../css/49.confirmationModal.css"

const ConfirmationModal = ({open, onClose}, ref) => {

    const closeRef = useRef(null);
    const confirmRef = useRef(null);
    const denyRef = useRef(null);
    useImperativeHandle(ref, () => ({
        focusCloseBtn: () => closeRef.current.focus(),
        focusConfirmBtn: () => confirmRef.current.focus(),
        focusDenyBtn: () => denyRef.current.focus(),
    }), []);

    const el = (
        <Fragment>
            <div className={`modal${open ? "" : " hide"}`} ref={ref}>
                <button className="close_btn" ref={closeRef} onClick={onClose}>
                    &times;
                </button>
                <div className="modal_header">
                    <h1>Title</h1>
                </div>
                <div className="modal_body">Do you confirm ?</div>
                <div className="modal_footer">
                    <button className="confirm_btn" ref={confirmRef} onClick={onClose}>Yes</button>
                    <button className="deny_btn" ref={denyRef} onClick={onClose}>No</button>
                </div>
            </div>
        </Fragment>
    )

    return el;
}

export default React.forwardRef(ConfirmationModal)