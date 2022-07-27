import React from "react"


class CounterCls extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
        // this.incrementCounter = this.incrementCounter.bind(this)
        // this.decrementCounter = this.decrementCounter.bind(this)
    }

     incrementCounter = () => {
        let value = this.state.count + 1
        this.setState({
            count:  value
        })
    }

    decrementCounter = () => {
        let value = this.state.count - 1
        this.setState({
            count:  value
        })
    }

    render() {
        return (
            <>
            <h3>Counter : {this.state.count} </h3>
            <button onClick={this.incrementCounter}>Increment</button>
            <button onClick={this.decrementCounter}>Decrement</button>
            <h3>Counter : {this.state.count} </h3>
        </>
        )
    }
}

export default CounterCls;