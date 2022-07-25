import React from 'react';

// constructor
class Counter extends React.Component {
    state = {
        count: 0
    };

    constructor(props) {
        super(props);
        this.state.count = this.props.count;
        console.log('constructor');
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

    componentDidMount() {
        console.log('component did mount');
    }

    shouldComponentUpdate(nextProps, nextState) {
        // lodash
        return nextState.person === this.state.person;
    }

    componentDidUpdate() {
        console.log('updated');
    }

    componentWillUnmount() {
        console.log('unmounted');
    }

    render() {
        console.log('render');
        return <>
            <h1>Counter</h1>
            <h4>Count: {this.state.count}</h4>
            <button onClick={this.onInc}>++</button>
            <button onClick={this.onDec}>--</button>
        </>
    }
}

export default Counter;
