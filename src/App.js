// Function
// returns null or UI
// modules: CommonJS
// ES6 module
import About from './About';
import Languages from './Languages';
import Person from './Name';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Student from './Student';

const App = () => {
    // JSX
    return <div>
        <Student marks={40} />
        <Student marks={30} />
        <Languages />
        <Person name="John" age={20} dept="CSE" />
        <Person name="Joseph" age={20} />
        <Person name="Steve" age={25} />
        <About />
        <h1>Hello React</h1>
        <h2>Hello world</h2>
        <a href="adkfkadjfkj.com">Click me</a>
    </div>
};

export default App;
