import axios from 'axios';

const getInstance = () => {
    const host = 'https://fsa-api-b3.herokuapp.com';

    let headers = {};
    const userItem = localStorage.getItem('user');
    const user = JSON.parse(userItem);
    if (user) {
        const token = user.token || '';
        headers.authorization = 'Bearer ' + token;
    }
    return axios.create({
        baseURL: host,
        headers
    });
};


export default getInstance;
