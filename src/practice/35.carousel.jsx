import { useState, useEffect, Fragment } from "react"
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { v4 } from "uuid"
import ImgWrap from "./components/35.img_wrap";
import ChangeButton from "./components/35.ChangeButton";
import Dots from "./components/35.Dots";
import "./css/35.carousel.css"

const Carousel = () => {

    const images = [
        { src: "../../imgs/slide1.jpg" },
        { src: "../../imgs/slide2.jpg" },
        { src: "../../imgs/slide3.jpg" },
        { src: "../../imgs/slide4.jpg" },
        { src: "../../imgs/slide5.jpg" },
    ];
    const total = images.length;

    const [imgArray, setImgArray] = useState(images)
    const [active, setActive] = useState(0);
    const [direction, setDirection] = useState(true);

    useEffect(() => {
        setImgArray(pre => (
            pre.map((item, index) => (
                { ...item, id: v4(), index }
            ))
        ));
    }, []);

    //分成3個component train 左右按鈕 圓點按鈕
    //transition group分右滑左滑 兩個方向 左右按鈕會改變方向 圓點按鈕要判斷nowPage(active)和下一張決定左滑還是右滑
    const el = (
        <Fragment>
            <ul style={{ width: "640px", height: "360px", listStyleType: "none", padding: "0px", margin: "auto", position: "relative", overflow: "hidden" }}>
                {/* TransitionGroup預設會當成div 若設成component={null} 渲染時就不會出現任何html tag */}
                <TransitionGroup component={null}>
                    {imgArray.map(item => (
                        /* 幾張圖就生幾個li 並且加上CSSTransition當li的index與active相同者進場 */
                        <Fragment key={item.src}>
                            <CSSTransition in={item.index === active} timeout={500} classNames={direction ? "right" : "left"}>
                                <ImgWrap imgObj={item} />
                            </CSSTransition>
                        </Fragment>
                    ))}
                </TransitionGroup>
            </ul>
            {/* 左右按鈕可以控制active++或active-- 以及滑動方向 */}
            <ChangeButton num={-1} setActive={setActive} total={total} setDirection={setDirection}>
                prev
            </ChangeButton>
            <ChangeButton num={1} setActive={setActive} total={total} setDirection={setDirection}>
                next
            </ChangeButton>
            {/* 圓點按鈕可以控制active = index 以及判斷滑動方向 */}
            <ul style={{listStyleType: "none", padding: "0px", display: "flex"}}>
                {imgArray.map(item => (
                    <Dots key={v4()} imgObj={item} setActive={setActive} setDirection={setDirection} active={active} />
                ))}
            </ul>
            {/* 除錯用方便看active現在是多少 */}
            <span>{active}</span>
        </Fragment>
    )

    return el;
}

export default Carousel