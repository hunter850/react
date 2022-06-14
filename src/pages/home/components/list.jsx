import Item from "./item.jsx"

//只要加了{}就能用js的語法塞入資料
// const ar = [1, 2, 3, 4];

const List = ({dataArray, deleteData}) => {
    // console.log(dataArray);
    return (
        <div className="list">
            {/* {ar.map(item => <div>{item}</div>)} */}
            {dataArray.map(item => {
                const {id, note, date, time} = item;
                return <Item note={note} date={date} time={time} deleteData={deleteData} key={id} id={id} />
            })}
        </div>
    )
}

export default List