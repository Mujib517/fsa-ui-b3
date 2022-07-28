import getInstance from "./axiosSvc";

const login = (user) => {
    const axios = getInstance();
    return axios.post('/api/users/login', user);
};

export default { login };
