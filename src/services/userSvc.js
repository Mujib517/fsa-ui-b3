import axios from "./axiosSvc";

const login = (user) => {
    return axios.post('/api/users/login', user);
};

export default { login };
