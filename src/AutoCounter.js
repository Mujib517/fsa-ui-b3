import React, { Component, useEffect, useState } from 'react';

// class AutoCounter extends Component {
//     state = { count: 0 }

//     componentDidMount = () => {
//         this.interval = setInterval(() => {
//             console.log('set interval');
//             let old = this.state.count;
//             this.setState({ count: ++old });
//         }, 1000);
//     }

//     componentWillUnmount() {
//         clearInterval(this.interval);
//     }

//     render() {
//         return <h1>Count: {this.state.count}</h1>;
//     }
// }

const AutoCounter = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        // componentDidMount
        // componentDidUpdate
        // componentWillUnmount
        const timer = setTimeout(() => {
            setCount(count + 1);
        }, 1000);

        return () => {
            clearTimeout(timer);
        };
    }, [count]);

    return <h1>Count: {count}</h1>;
};

export default AutoCounter;
