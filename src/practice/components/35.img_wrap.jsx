

const ImgWrap = ({ imgObj }) => {
    const el = (
        <li style={{width: "100%", height: "100%"}}>
            <img src={imgObj.src} style={{width: "100%", height: "100%", objectFit: "cover", objectPosition: "center center"}} alt="" />
        </li>
    )

    return el;
}

export default ImgWrap