import React from 'react';
import AutoCounter from './AutoCounter';
import Counter from './Counter';
import CounterFunc from './CounterFunc';


// Life cycle methods

function Home() {
    // <div>
    // <h1>Home Page</h1>
    // <h2> Hello World</h2>
    // <a href="google.com"/>
    // </div>
    return <CounterFunc count={100} />
}

export default Home;
