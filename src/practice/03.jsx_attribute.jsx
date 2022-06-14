const Attr = () => {
    const data = {
        answer: "Yes",
        image: "https://yesno.wtf/assets/yes/5-64c2804cc48057b94fd0b3eaf323d92c.gif"
    }
    const el = (
        <div>
            <p>{data.answer}</p>
            <div>
                <img src={data.image} alt={data.image} />
            </div>
        </div>
    )
    return el;
    
}

export default Attr