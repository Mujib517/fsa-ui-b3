import { Link, useNavigate } from "react-router-dom";
import IfElse from "./IfElse";

const Header = () => {

    const navigate = useNavigate();

    const onLogout = () => {
        localStorage.removeItem('user');
        navigate('/login');
    };

    const isLoggedIn = () => {
        return !!localStorage.getItem('user');
    };

    return <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
            <a className="navbar-brand" href="#">FSA Products</a>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/about">About</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/products">Products</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/users">Users</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/contact">Contact</Link>
                </li>
                <li className="nav-item m-1">
                    <i style={{fontSize:'30px'}} className="fa fa-shopping-cart"></i>
                </li>
                <li className="nav-item m-1">
                    <button className="btn btn-sm btn-danger">Register</button>
                </li>
                <IfElse cond={isLoggedIn()}>
                    <li className="nav-item m-1">
                        <button onClick={onLogout} className="btn btn-sm btn-danger">Logout</button>
                    </li>
                    <li className="nav-item m-1">
                        <Link to="/login" className="btn btn-sm btn-success">Login</Link>
                    </li>
                </IfElse>

            </ul>
        </div>
    </nav>
};

export default Header;
