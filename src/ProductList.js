import React, { Component } from 'react';
import axios from 'axios';

import Product from './Product';
import IfElse from './IfElse';

class ProductList extends Component {

    state = {
        products: {
            metadata: {},
            data: []
        },
        hasError: false
    };

    constructor() {
        super();

        axios.get('https://fsa-api-b3.herokuapp.com/api/products/page/1/size/15')
            .then(res => this.setState({ products: res.data, hasError: false }))
            .catch(err => this.setState({ hasError: true }));
    }

    render() {
        return <div>
            <h1>Product List</h1>
            <IfElse cond={this.state.hasError}>
                <div className="alert alert-danger">Something went wrong please try again later.</div>
                {this.state.products.data.map(product => <Product product={product} />)}
            </IfElse>
        </div>
    }
}

export default ProductList;
