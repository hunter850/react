const BoilingVerdict = ({ celsius }) => {
    const el = (
        celsius >= 100 ? <p>The water would boil.</p> : <p>The water would not boil.</p>
    )

    return el;
}

export default BoilingVerdict