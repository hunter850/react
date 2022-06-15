import React from "react"

const LifeCycle = () => {
    /*
    1.初始化constructor 可以用this
    2.執行render() 渲染畫面
    3.render後進入DidMount, DidMount會開啟setInterval每秒呼叫一次tick()
    4.tick()會更新setState react就會知道有資料被更新 重新渲染
    5.每秒都會觸發tick()每秒都會setState 所以每秒都會重新渲染
    */
    class Clock extends React.Component {
        constructor(props) {
            super(props);
            //唯一能用this.state直接指定值的地方 其他地方都要用setState({key: newValue})來做設定
            this.state = { date: new Date() };
        }

        tick() {
            this.setState({ date: new Date })
            /* 
            或以function的方式傳入state,props
            setState((state, props) => ({
                counter: state.counter + props.increment
            }));
            */
        }

        componentDidMount() {
            console.log("DidMount");
            this.timerID = setInterval(() => {
                this.tick();
            },1000);
        }

        componentWillUnmount() {
            console.log("WillMount");
            clearInterval(this.timerId);
        }

        render() {
            return (
                <div>
                    <h1>Hello Wordl</h1>
                    <h2>It is {this.state.date.toLocaleTimeString()}</h2>
                </div>
            )
        }
    }

    return <Clock />
}

export default LifeCycle