// Function
// returns null or UI
// modules: CommonJS
// ES6 module
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Counter from './Counter';
import UserList from './UserList';

const App = () => {
    // JSX
    return <div>
        <UserList />
    </div>
};

export default App;
