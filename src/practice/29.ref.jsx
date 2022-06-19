import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./css/29.ref.css"

const TryRef = () => {
    gsap.registerPlugin(ScrollTrigger);
    const box = useRef(null);
    const box2 = useRef(null)
    const [gsapAnimation, setGsapAnimation] = useState({});

    // let temp;
    const animationHandler = () => {
        setGsapAnimation(() => (
            gsap.timeline().to(box.current, {
                duration: 1,
                x: 200,
                y: 100,
                rotation: 360,
                yoyo: true,
                repeat: -1,
                ease: "none"
            })
        ))
        // temp = gsap.timeline().to(box.current, {
        //     duration: 1,
        //     x: 200,
        //     y: 100,
        //     rotation: 360,
        //     yoyo: true,
        //     repeat: -1,
        //     ease: "none"
        // })
    }

    const playHandler = () => {
        gsapAnimation.paused() ? gsapAnimation.play() : gsapAnimation.pause();
        // temp.paused() ? temp.play() : temp.pause();
    }

    useEffect(() => {
        gsap.to(box2.current, {
            duration: 3,
            x: 300,
            scrollTrigger: {
                trigger: box2.current,
                start: "top 60%",
                end: "top 40%",
                //onEnter onLeave onEnterBack onLeaveBack
                // toggleActions: "play none none none",
                // toggleActions: "restart none none none",
                // toggleActions: "restart reverse none none",
                // toggleActions: "restart pause none none",
                // toggleActions: "restart pause resume none",
                // toggleActions: "restart pause resume reset",
                toggleActions: "restart none none reset",
                // toggleActions: "restart pause resume complete",
                markers: true,
            }
        })
        // (() => {
        // })();
    }, []);

    useEffect(() => {
        console.log("box query", document.querySelector(".box"));
        console.log("box ref: ", box.current)
        // window.addEventListener("scroll", () => {
        //     console.log(box.current.getBoundingClientRect().top);
        // })
    }, []);

    const el = (
        <div>
            <button onClick={animationHandler}>click to show animation</button>
            <br />
            <br />
            <button onClick={playHandler}>play & pause</button>
            <div className="box" ref={box}></div>
            <div className="box2" ref={box2}></div>
        </div>
    )

    return el;
}

export default TryRef