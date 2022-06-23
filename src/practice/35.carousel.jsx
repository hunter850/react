import { useState, useEffect, Fragment } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { v4 } from "uuid";
import ImgWrap from "./components/35.img_wrap";
import "./css/35.carousel.css"

const Carousel = () => {

    const [imgArray, setImgArray] = useState([]);
    const [active, setActive] = useState(0);
    const [isRight, setIsRight] = useState(true);

    useEffect(() => {
        fetch("https://picsum.photos/v2/list?page=2&limit=5")
        .then(data => data.json())
        .then(data => {
            setImgArray(() => data.map((item, index) => ({ ...item, id: v4(), index })));
        })
    }, [])

    const nextHandler = () => {
        setIsRight(true);
        setActive(pre => ((pre + 1 + imgArray.length) % imgArray.length));
    }
    const prevHandler = () => {
        setIsRight(false);
        setActive(pre => ((pre - 1 + imgArray.length) % imgArray.length));
    }

    const el = (
        <Fragment>
            <ul style={{ listStyleType: "none", padding: "0px", margin: "auto", width: "320px", height: "180px", position: "relative", overflow: "hidden" }}>
                <TransitionGroup component={null}>
                    {imgArray.map(item => (
                        <Fragment key={item.id}>
                            <CSSTransition in={item.index === active} timeout={500} classNames={isRight ? "slide" : "left"}>
                                <ImgWrap imgObj={item} />
                            </CSSTransition>
                        </Fragment>
                    ))}
                </TransitionGroup>
            </ul>
            <button onClick={prevHandler}>next</button>
            <button onClick={nextHandler}>next</button>
        </Fragment>
    )

    return el;
}

export default Carousel