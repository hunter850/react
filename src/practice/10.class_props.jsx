import React from "react"

const ClassProps = () => {
    class Clock extends React.Component {
        constructor(props) {
            super(props);
            this.state = {date: new Date()};
        }

        render() {
            return (
                <div>
                    <h1>Hello World</h1>
                    <h1>It is {this.state.date.toLocaleTimeString()}</h1>
                </div>
            )
        }
    }
    return <Clock />
}

export default ClassProps