// Function
// returns null or UI
// modules: CommonJS
// ES6 module
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Counter from './Counter';

const App = () => {
    // JSX
    return <div>
        <Counter />
        <Counter />
        <Counter />
    </div>
};

export default App;
