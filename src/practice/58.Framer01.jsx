import { Fragment, useState, useMemo } from "react";
import { motion } from "framer-motion";

const styles = {
    box: {
        width: "200px",
        height: "200px",
        backgroundColor: "#faf",
    },
};
function Framer01() {
    const [isActive, setIsActive] = useState(false);
    const animation = useMemo(() => {
        return {
            x: isActive ? 400 : 0,
            opacity: isActive ? 1 : 0.5,
            backgroundColor: isActive ? "#f00" : "#faf",
            scale: isActive ? 1.2 : 1,
            rotate: isActive ? 90 : 0,
        };
    }, [isActive]);
    const init = useMemo(() => {
        return {
            opacity: 0.5,
            scale: 1
        };
    }, []);
    // type: inertia just keyframes spring tween
    const trans = useMemo(() => {
        return {
            duration: 10,
            type: "spring",
            stiffness: 500,
            damping: 25,
        };
    }, []);
    return (
        <Fragment>
            <button onClick={() => setIsActive(!isActive)}>toggle</button>
            <motion.div
                style={styles.box}
                animate={animation}
                initial={init}
                transition={trans}
            >
                text
            </motion.div>
            <h1>Hello React</h1>
        </Fragment>
    );
}

export default Framer01;
