import axios from 'axios';

const host = 'https://fsa-api-b3.herokuapp.com';

const instance = axios.create({
    baseURL: host
});

export default instance;
