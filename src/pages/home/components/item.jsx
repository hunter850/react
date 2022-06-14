const Item = ({id, note, date, time, deleteData}) => {

    const deleteItem = () => {
        deleteData((pre) => {
            return pre.filter(item => {
                return item.id !== id;
            })
        })
    }

    return (
        <div className="item">
            <div>
                <p>{note}</p>
                <p>{`${date} ${time}`}</p>
            </div>
            <button onClick={deleteItem} className="remove">X</button>
        </div>
    )
}

export default Item