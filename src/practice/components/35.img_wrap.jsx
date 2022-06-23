const ImgWrap = ({ imgObj }) => {
    const el = (
        <li style={{width: "320px", height: "180px"}}>
            <div className="img_wrap" style={{width: "320px", height: "180px", position: "absolute", top: "0px", left: "0px"}}>
                <img src={imgObj.download_url} style={{width: "100%", height: "100%", objectFit: "cover", objectPosition: "center center"}} />
            </div>
        </li>
    )

    return el;
}

export default ImgWrap