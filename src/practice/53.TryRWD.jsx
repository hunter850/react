import { Fragment, useState, useMemo, useEffect } from "react";
import "./css/reset.css";

function TryRWD() {
    const [breakPoint, setBreakPoint] = useState(0);
    const styles = useMemo(() => {
        if (breakPoint === 0) {
            return {
                container: {
                    width: "100%",
                    padding: "0px 200px",
                },
                box: {
                    width: "80%",
                    height: "200px",
                    backgroundColor: "#faf",
                    margin: "auto",
                },
                text: {
                    fontSize: "24px",
                },
                nameInput: {
                    width: "80%",
                    height: "36px",
                },
            };
        } else {
            return {
                container: {
                    width: "100%",
                    padding: "0px",
                },
                box: {
                    width: "100%",
                    height: "200px",
                    backgroundColor: "#ffa",
                    margin: "auto",
                },
                text: {
                    fontSize: "16px",
                },
                nameInput: {
                    width: "80%",
                    height: "30px",
                },
            };
        }
    }, [breakPoint]);
    useEffect(() => {
        if (window.innerWidth > 768) {
            setBreakPoint(0);
        } else {
            setBreakPoint(1);
        }
    }, []);
    useEffect(() => {
        function resizeHandler() {
            if (window.innerWidth > 768) {
                setBreakPoint(0);
            } else {
                setBreakPoint(1);
            }
        }
        window.addEventListener("resize", resizeHandler);
        return () => window.removeEventListener("resize", resizeHandler);
    }, []);
    return (
        <Fragment>
            <div style={styles.container}>
                <div style={styles.box}>
                    <form>
                        <label htmlFor="" style={styles.text}>
                            姓名
                        </label>
                        <input type="text" style={styles.nameInput} />
                    </form>
                </div>
            </div>
        </Fragment>
    );
}

export default TryRWD;
