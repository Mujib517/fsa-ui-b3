import React, { Component } from 'react';
import axios from 'axios';

import Product from './Product';
import IfElse from './IfElse';
import { Link } from 'react-router-dom';

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
            <Link to="/products/new" className="m-2 btn btn-danger btn-sm">
                Add product &nbsp;
                <i className="fa fa-plus"></i>
            </Link>
            <IfElse cond={this.state.hasError}>
                <div className="alert alert-danger">Something went wrong please try again later.</div>
                {this.state.products.data.map(product => <Product product={product} />)}
            </IfElse>
        </div>
    }
}

export default ProductList;
