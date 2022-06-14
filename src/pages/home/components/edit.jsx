import { useState } from "react"
import { v4 } from "uuid"

const Edit = ({ add }) => {
    const [note, setNote] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    const changeNote = (event) => {
        setNote(event.target.value);
    }
    const changeDate = (event) => {
        setDate(event.target.value)
    }
    const changeTime = (event) => {
        setTime(event.target.value)
    }

    // console.log(note, date, time);

    const addItem = () => {
        add(preArray => {
            return [{ id: v4(), note, date, time }, ...preArray];
        })
    }

    return (
        <div>
            <h1>備忘錄</h1>
            <p>記事: </p>
            <input type="text" value={note} onChange={changeNote}></input>
            <p>日期: </p>
            <input type="date" value={date} onChange={changeDate}></input>
            <p>時間: </p>
            <input type="time" value={time} onChange={changeTime}></input>
            <button type="button" className="add" onClick={addItem}>新增</button>
        </div>
    )
}

export default Edit