import { Fragment, useMemo, useState } from "react";
import { motion } from "framer-motion";

function TryFramerMotion() {
    const [animation, setAnimation] = useState({});
    const [isShow, setIsShow] = useState(false);
    const styles = useMemo(() => {
        return {
            box: {
                width: "200px",
                height: "200px",
                backgroundColor: "#faf",
            },
        };
    }, []);
    const variants = {
        hidden: { opacity: 0.5 },
        visible: { opacity: 1 },
    };
    return (
        <Fragment>
            <button
                onClick={() => setAnimation({ scale: 0.5, x: 200, y: 200 })}
            >
                scale0.5
            </button>
            <button onClick={() => setAnimation({ scale: 1 })}>scale1</button>
            <button onClick={() => setIsShow(!isShow)}>Toggle</button>
            <motion.div animate={animation} style={styles.box} />
            <motion.div
                initial="hidden"
                animate={isShow ? "visible" : "hidden"}
                variants={variants}
                style={styles.box}
            />
            <motion.div
                drag
                dragConstraints={{
                    left: -100,
                    right: 100,
                    top: -100,
                    bottom: 100,
                }}
                dragElastic={0.2}
                dragMomentum={false}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                style={styles.box}
            />
        </Fragment>
    );
}

export default TryFramerMotion;
