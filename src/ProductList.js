import React, { useEffect, useState } from 'react';

import productSvc from './services/productSvc';
import Product from './Product';
import IfElse from './IfElse';
import { Link } from 'react-router-dom';
import ShouldRender from './ShouldRender';
import Loader from './Loader';

const ProductList = () => {

    const [products, setProducts] = useState({
        metadata: {},
        data: []
    });

    const [hasError, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(async () => {
        try {
            const res = await productSvc.get();
            setProducts({ products: res.data });
            setError(false);
        } catch (err) {
            setError(true);
        } finally {
            setLoading(false);
        }
    }, []);

    const onRemoveChild = async () => {
        const res = await productSvc.get();
        setProducts({ products: res.data });
        setError(false);
    };

    return <div>
        <h1>Product List</h1>
        <ShouldRender cond={loading}>
            <Loader />
        </ShouldRender>
        <Link to="/products/new" className="m-2 btn btn-danger btn-sm">
            Add product &nbsp;
            <i className="fa fa-plus"></i>
        </Link>
        <IfElse cond={hasError}>
            <div className="alert alert-danger">Something went wrong please try again later.</div>
            {products.data.map(product => <Product product={product} onDelete={onRemoveChild} />)}
        </IfElse>
    </div>
}

export default ProductList;

// Vitual DOM in memory object
// DOM
// Vue

// Mount
// constructor
// render
// componentDidMount

// Update
// shouldComponentUpdate
// componentDidUpdate
// render

// Unmount
// componentWillUnmount
