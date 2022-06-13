import { useState } from "react"

import Edit from './components/edit.jsx'
import List from './components/list.jsx'
import './index.css'

//能宣告一個物件寫CSS 並在div上加style={app} 如此能替div加上inline style
// const app = {
//     color: "red"
// }

const Home = () => {
    const [a, setA] = useState(100);
    const [data, setData] = useState([]);
    function addition() {
        //若只寫setA(a + 100); 那有很多個setA(a + 100); 按一次仍然只會加100 用return的才會有幾個加幾百
        setA(pre => {
            return pre + 100;
        });
        // setA(pre => {
        //     return pre + 100;
        // });
    }
    return (
        <div className="app">
            {a}
            <button onClick={addition}>+100</button>
            <Edit add={setData} />
            <List dataArray={data} />
        </div>
    )
}

export default Home