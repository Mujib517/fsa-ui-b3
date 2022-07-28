import getInstance from './axiosSvc';

const get = (page, limit, search, sort) => {
    const [sortBy, sortDir] = sort.split(' ');
    const axios = getInstance();
    return axios.get(`/api/products/page/${page}/size/${limit}?search=${search}&sort=${sortBy}&dir=${sortDir}`);
};

const post = (product) => {
    const axios = getInstance();
    return axios.post('/api/products', product);
}

const getProductById = (id) => {
    const axios = getInstance();
    return axios.get('/api/products/' + id);
}

const remove = (id) => {
    const axios = getInstance();
    return axios.delete(`/api/products/${id}`);
};

export default { get, post, getProductById, remove };