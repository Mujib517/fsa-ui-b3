import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import productSvc from './services/productSvc';

const ProductDetail = () => {

    const [product, setProduct] = useState({});
    const params = useParams();

    useEffect(() => {
        productSvc.getProductById(params.id)
            .then(res => {
                console.log(res, 'response came');
                setProduct(res.data);
            })
            .catch(err => console.log(err));
    }, []);

    const { brand, model, price } = product;
    return <>
        <h1>Product Detail</h1>
        <b>{brand} {model}</b>
        <div><b>${price}</b></div>
    </>
};

export default ProductDetail;
