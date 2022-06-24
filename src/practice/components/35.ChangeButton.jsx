import React from 'react'

const ChangeButton = ({children, num, setActive, total, setDirection}) => {

    const changeHandler = () => {
        if(num > 0) {
            setDirection(true);
        } else {
            setDirection(false);
        }
        setActive(pre => ((pre + num + total) % total));
    }

    const el = (
        <button onClick={changeHandler}>{children}</button>
    )

    return el;
}

export default ChangeButton