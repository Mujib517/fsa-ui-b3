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

    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(5);

    const [hasError, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // IIFE
        (async function () {
            try {
                const res = await productSvc.get(page, limit);
                setProducts(res.data);
                setError(false);
            } catch (err) {
                setError(true);
            } finally {
                setLoading(false);
            }
        })();
    }, [page]);

    const onRemoveChild = async () => {
        const res = await productSvc.get();
        setProducts({ products: res.data });
        setError(false);
    };

    const onPrev = () => {
        if (page > 1) setPage(page - 1);
    };

    const onNext = () => {
        if (page < products.metadata.totalPages)
            setPage(page + 1);
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
            <div>
                <div className="btn-group">
                    <button disabled={page === 1} onClick={onPrev} className="btn btn-outline-secondary">
                        <i className="fa fa-arrow-left"></i>
                    </button>
                    <button disabled className="btn btn-outline-secondary">
                        Page {page} of {products.metadata.totalPages}
                    </button>
                    <button disabled={page === products.metadata.totalPages} onClick={onNext} className="btn btn-outline-secondary">
                        <i className="fa fa-arrow-right"></i>
                    </button>
                </div>
                {products.data.map(product => <Product product={product} onDelete={onRemoveChild} />)}
            </div>
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
