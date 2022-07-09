import { Fragment } from "react";
import Creditcard from "./Creditcard";

const CreditcarContainer = () => {
    const el = (
        <Fragment>
            <div
                className="fake_body"
                style={{
                    width: "100vw",
                    height: "100vh",
                    backgroundColor: "#FCFAF7",
                }}
            >
                <div
                    style={{
                        width: "100%",
                        height: "60px",
                        backgroundColor: "#253945",
                        marginBottom: "50px",
                    }}
                >
                    nav
                </div>
                <div style={{ padding: "0px 200px" }}>
                    <Creditcard />
                </div>
            </div>
        </Fragment>
    );

    return el;
};

export default CreditcarContainer;
