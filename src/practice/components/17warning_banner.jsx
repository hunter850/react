const WarningBanner = ({ showWarning }) => {
    if(showWarning) {
        return (
            <h1 className="warning">
                Warning !
            </h1>
        )
    } else {
        return null;
    }
}

export default WarningBanner