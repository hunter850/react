const ChangeNumber = ({ setObj }) => {

    const change = () => {
        setObj(pre => {
            return {...pre, number: 30};
        });
    }

    const el = (
        <button onClick={change}>change to 30</button>
    )
    return el;
}

export default ChangeNumber