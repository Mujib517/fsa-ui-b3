import axios from 'axios';

const host = 'https://fsa-api-b3.herokuapp.com';

const get = () => {
    return axios.get(host + '/api/products/page/1/size/15');
};

const post = (product) => {
    return axios.post(host + '/api/products', product);
}

const getProductById = (id) => {
    return axios.get(host + '/api/products/' + id);
}

export default { get, post, getProductById };