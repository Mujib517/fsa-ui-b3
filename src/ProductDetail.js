import React, { useEffect, useState } from 'react';
import productSvc from './services/productSvc';


const ProductDetail = () => {

    const [product, setProduct] = useState({});

    useEffect(() => {
        productSvc.getProductById('62bd11e0e1a093e318618d84')
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
