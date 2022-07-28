import { useState } from "react";
import { useNavigate } from "react-router-dom";

import userSvc from "./services/userSvc";
import ShouldRender from "./ShouldRender";

const Login = () => {

    const [user, setUser] = useState({ email: '', password: '' });
    const [hasError, setError] = useState(false);
    const navigate = useNavigate();

    const onLogin = async (evt) => {
        try {
            evt.preventDefault();
            const res = await userSvc.login(user);
            localStorage.setItem('user', JSON.stringify(res.data));
            navigate('/products');
        } catch (e) {
            if (e.response.status === 401) setError(true);
        }
    };

    const onInputChange = (evt) => {
        const newState = { ...user, [evt.target.name]: evt.target.value };
        setUser(newState);
    };

    return <div className="col-sm-6">
        <ShouldRender cond={hasError}>
            <div className="alert alert-danger">Wrong username or password</div>
        </ShouldRender>
        <form onSubmit={onLogin}>
            <h3>Login</h3>
            <div className="m-3">
                <input onChange={onInputChange} name="email" type="text" className="form-control" placeholder="Email" />
            </div>
            <div className="m-3">
                <input onChange={onInputChange} name="password" type="password" className="form-control" placeholder="Password" />
            </div>
            <div className="m-3">
                <button type="submit" className="btn btn-success">Login</button>
            </div>
        </form>
    </div>
};

export default Login;
