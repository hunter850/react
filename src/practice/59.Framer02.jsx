import { Fragment, useRef } from "react";
import { motion } from "framer-motion";
import useLog from "./hooks/useLog";
import useIsIn from "./hooks/useIsIn";
import useIsInRestore from "./hooks/useIsInRestore";

function Framer02() {
    const pRef = useRef(null);
    const motionRef = useRef(null);
    const motionInView = useIsInRestore(motionRef, 100);
    const pInView = useIsIn(pRef, 100);
    useLog("in: ", motionInView);
    return (
        <Fragment>
            <div style={{ width: "10%" }}>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Excepturi, quos?
                </p>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Excepturi, quos?
                </p>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Excepturi, quos?
                </p>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Excepturi, quos?
                </p>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Excepturi, quos?
                </p>
                <motion.div
                    style={{
                        height: "50px",
                        width: "50px",
                        backgroundColor: "#faa",
                    }}
                    ref={motionRef}
                    animate={{ x: motionInView ? 400 : 0 }}
                >this is box</motion.div>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Excepturi, quos?
                </p>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Excepturi, quos?
                </p>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Excepturi, quos?
                </p>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Excepturi, quos?
                </p>
                <motion.p
                    ref={pRef}
                    style={{ color: "red", backgroundColor: "black" }}
                    animate={{ x: pInView ? 400 : 0 }}
                >
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Excepturi, quos?
                </motion.p>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Excepturi, quos?
                </p>
            </div>
        </Fragment>
    );
}

export default Framer02;
