import { Fragment } from "react";

const Chip = () => {
    const el = (
        <Fragment>
            <div className="chip" style={{width: "50px", height: "40px", backgroundImage: "linear-gradient(to bottom left, #ffecc7, #d0b978)", borderRadius: "5px", display: "flex", justifyContent: "center", alignItems: "center", overflow: "hidden", position: "relative"}}>
                <div className="chip_line" style={{position: "absolute", width: "100%", height: "1px", backgroundColor: "#333", top: "13px"}}></div>
                <div className="chip_line" style={{position: "absolute", width: "100%", height: "1px", backgroundColor: "#333", top: "20px"}}></div>
                <div className="chip_line" style={{position: "absolute", width: "100%", height: "1px", backgroundColor: "#333", top: "28px"}}></div>
                <div className="chip_line" style={{position: "absolute", width: "1px", height: "50px", backgroundColor: "#333", left: "25px"}}></div>
                <div className="chip_main" style={{width: "20px", height: "25px", backgroundImage: "linear-gradient(to bottom left, #efdbab, #e1cb94)", border: "1px solid #333", borderRadius: "3px", zIndex: "1"}}></div>
            </div>
        </Fragment>
    )

    return el;
}

export default Chip