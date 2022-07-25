// 16.x 

import { useState } from "react";

// hooks
const CounterFunc = ({ count }) => {

    const [countState, setCountState] = useState(count);

    const inc = () => {
        setCountState(1000);
    }

    const dec = () => {
        setCountState(10);
    }

    return <>
        <h1>Counter {countState}</h1>
        <div className="btn-group">
            <button onClick={inc} class="btn btn-lg btn-success">++</button>
            <button onClick={dec} class="btn btn-lg btn-danger">--</button>
        </div>
    </>
};

export default CounterFunc;
