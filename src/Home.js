import React from 'react';

function Home() {
    // <div>
    // <h1>Home Page</h1>
    // <h2> Hello World</h2>
    // <a href="google.com"/>
    // </div>
    const h1 = React.createElement('h1', {}, "Home Page");
    const h2 = React.createElement('h2', {}, "Hello World");
    const a = React.createElement('a', { href: 'https://www.google.com' }, "Click me");
    const div = React.createElement('div', {}, [h1, h2, a]);

    return div;
}

export default Home;
