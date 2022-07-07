import React from 'react';

class Counter extends React.Component {
    state = {
        count: 10
    };

    constructor() {
        super();

        // this.onInc = this.onInc.bind(this);
        // this.onDec = this.onDec.bind(this);
    }

    onInc = () => {
        const currentCount = this.state.count;
        // mutatation
        this.setState({
            count: currentCount + 1
        });
    }

    // handler
    onDec = () => {
        const currentCount = this.state.count;
        this.setState({
            count: currentCount - 1
        });
    }

    render() {
        return <>
            <h1>Counter</h1>
            <h4>Count: {this.state.count}</h4>
            <button onClick={this.onInc}>++</button>
            <button onClick={this.onDec}>--</button>
        </>
    }
}

export default Counter;
