import { Fragment } from "react";
import Creditcard from "./Creditcard";

function CreditcarContainer() {
    const fakeBodyStyle = {
        width: "100vw",
        height: "100vh",
        backgroundColor: "#FCFAF7",
    };
    const fakeNav = {
        width: "100%",
        height: "60px",
        backgroundColor: "#253945",
        marginBottom: "50px",
    };
    const containter = { padding: "0px 200px" };

    return (
        <Fragment>
            <div className="fake_body" style={fakeBodyStyle}>
                <div style={fakeNav}>nav</div>
                <div style={containter}>
                    <Creditcard />
                </div>
            </div>
        </Fragment>
    );
}

export default CreditcarContainer;
