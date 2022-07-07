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
        <Counter count={0} />
        <Counter count={1} />
        <Counter count={10} />
    </div>
};

export default App;
