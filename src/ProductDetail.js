import React, { Component } from 'react';
import axios from 'axios';


class ProductDetail extends Component {

    state = {
        product: {}
    }

    constructor(props) {
        super(props);
        axios.get('https://fsa-api-b3.herokuapp.com/api/products/62bd11e0e1a093e318618d84')
            .then(res => {
                console.log(res, 'response came');
                this.setState({ product: res.data });
            })
            .catch(err => console.log(err));
    }

    render() {
        const { brand, model, price } = this.state.product;
        return <>
            <h1>Product Detail</h1>
            <b>{brand} {model}</b>
            <div><b>${price}</b></div>
        </>
    }
}

export default ProductDetail;