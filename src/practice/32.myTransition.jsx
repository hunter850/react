import { useState, useRef } from "react"

const Transition = () => {

    const purpleBox = useRef(null);

    const enterFrom = {
        // transform: "translateY(-30px)",
        height: "0px",
        opacity: 0
    }

    const enterActive = {
        // transition: "transform 1s ease, opacity 1s ease"
        transition: "height 1s ease, opacity 1s ease"
    }

    const enterTo = {
        // transform: "translateY(0px)",
        height: "200px",
        opacity: 1
    }

    const leaveFrom = {
        // transform: "translateY(0px)",
        height: "200px",
        opacity: 1
    }

    const leaveActive = {
        // transition: "transform 1s ease, opacity 1s ease"
        transition: "height 1s ease, opacity 1s ease"
    }

    const leaveTo = {
        // transform: "translateY(30px)",
        height: "0px",
        opacity: 0
    }

    const divStyle = {
        width: "200px",
        height: "200px",
        backgroundColor: "#faf"
    }

    const [boxStyle, setBoxStyle] = useState(divStyle)

    function myAnimationStart(el, set, from, active, to) {
        (function animationFrom() {
            if (boxStyle.display !== "none") {
                return false;
            }
            set(pre => ({...pre, display: "block", ...from}));
            setTimeout(animationTo, 0);
        })();
        function animationTo() {
            set(pre => ({...pre, ...active, ...to}));
            el.addEventListener("transitionend", animationEnd);
            function animationEnd() {
                el.removeEventListener("transitionend", animationEnd);
            }
        }
    }
    function myAnimationEnd(el, set, from, active, to) {
        (function animationFrom() {
            if (boxStyle.display === "none") {
                return false;
            }
            set(pre => ({...pre, ...from}));
            setTimeout(animationTo, 0);
        })();
        function animationTo() {
            set(pre => ({...pre, ...active, ...to}));
            el.addEventListener("transitionend", animationEnd);
            function animationEnd() {
                el.removeEventListener("transitionend", animationEnd);
                set(pre => ({...pre, display: "none"}));
            }
        }
    }

    const enterHandler = () => {
        myAnimationStart(purpleBox.current, setBoxStyle, enterFrom, enterActive, enterTo);
    }
    const leaveHandler = () => {
        myAnimationEnd(purpleBox.current, setBoxStyle, leaveFrom, leaveActive, leaveTo);
    }

    const el = (
        <>
            <button onClick={enterHandler}>enter</button>
            <button onClick={leaveHandler}>leave</button>
            <div ref={purpleBox} style={boxStyle}></div>
            <h1>box</h1>
        </>
    )

    return el;
}

export default Transition