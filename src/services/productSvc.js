import axios from './axiosSvc';

const get = (page, limit) => {
    return axios.get(`/api/products/page/${page}/size/${limit}`);
};

const post = (product) => {
    return axios.post('/api/products', product);
}

const getProductById = (id) => {
    return axios.get('/api/products/' + id);
}

const remove = (id) => {
    return axios.delete(`/api/products/${id}`);
};

export default { get, post, getProductById, remove };