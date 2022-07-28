import getInstance from './axiosSvc';

const get = (page, limit, search, sort) => {
    const [sortBy, sortDir] = sort.split(' ');
    const axios = getInstance();
    return axios.get(`/api/products/page/${page}/size/${limit}?search=${search}&sort=${sortBy}&dir=${sortDir}`);
};

const post = (product) => {
    // application/json
    // form-data
    const fd = new FormData();

    // reflection
    for (let key in product) {
        fd.append(key, product[key]);
    }

    // fd.append('brand', product.brand);
    // fd.append('model', product.model);
    // fd.append('inStock', product.inStock);
    // fd.append('price', product.price);
    // fd.append('category', product.category);
    // fd.append('discount', product.discount);
    // fd.append('img', product.img);

    const axios = getInstance();
    return axios.post('/api/products', fd);
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