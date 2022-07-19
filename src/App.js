// Function
// returns null or UI
// modules: CommonJS
// ES6 module
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import UserList from './UserList';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import NotFound from './NotFound';

// Single Page App (SPA)
// One page index.html

const App = () => {
    // JSX
    return <div>
        <Header />
        <div className="container">
            {/* dynamic content placeholder */}
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/users' element={<UserList />} />
                {/* <Route path='*' element={<Home />} /> */}
                <Route path='*' element={<NotFound />} />
            </Routes>
        </div>
        <Footer />
    </div >
};

export default App;
