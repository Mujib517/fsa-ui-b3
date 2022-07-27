import axios from './axiosSvc';

const get = (page, limit, search, sort) => {
    // Price ASC
    const [sortBy, sortDir] = sort.split(' ');
    return axios.get(`/api/products/page/${page}/size/${limit}?search=${search}&sort=${sortBy}&dir=${sortDir}`);
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