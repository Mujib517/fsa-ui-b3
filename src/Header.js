import { Link, useNavigate } from "react-router-dom";

const Header = () => {

    const navigate = useNavigate();

    const onLogout = () => {
        localStorage.removeItem('user');
        navigate('/login');
    };

    return <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container">
            <a class="navbar-brand" href="#">FSA Products</a>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link active" aria-current="page" to="/about">About</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link active" aria-current="page" to="/products">Products</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link active" aria-current="page" to="/users">Users</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link active" aria-current="page" to="/contact">Contact</Link>
                </li>
                <li className="nav-item m-1">
                    <button className="btn btn-sm btn-danger">Register</button>
                </li>
                <li className="nav-item m-1">
                    <Link to="/login" className="btn btn-sm btn-success">Login</Link>
                </li>
                <li className="nav-item m-1">
                    <button onClick={onLogout} className="btn btn-sm btn-danger">Logout</button>
                </li>
            </ul>
        </div>
    </nav>
};

export default Header;
