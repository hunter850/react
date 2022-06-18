const Bord = ({ color, children }) => {
    const el = (
        <div className={"bord_" + color}>
            {children}
            {children}
            {children}
        </div>
    )

    return el;
}

export default Bord