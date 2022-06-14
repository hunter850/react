import { useState, useEffect } from "react"

import Edit from './components/edit.jsx'
import List from './components/list.jsx'
import './index.css'

//能宣告一個物件寫CSS 並在div上加style={app} 如此能替div加上inline style
// const app = {
//     color: "red"
// }

const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        // console.log("資料變動");
        //綁定的事情
        // return () => {
        //     //取消綁定的事情
        // }
    }, [])

    return (
        <div className="app">
            <Edit add={setData} />
            <List dataArray={data} deleteData={setData}/>
        </div>
    )
}

export default Home