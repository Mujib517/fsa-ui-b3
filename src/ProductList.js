import React, { Component } from 'react';

import productSvc from './services/productSvc';
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

        productSvc.get()
            .then(res => this.setState({ products: res.data, hasError: false }))
            .catch(err => this.setState({ hasError: true }));
    }

    onRemoveChild = async () => {
        const res = await productSvc.get();
        this.setState({ products: res.data, hasError: false });
    };

    render() {
        return <div>
            <h1>Product List</h1>
            <Link to="/products/new" className="m-2 btn btn-danger btn-sm">
                Add product &nbsp;
                <i className="fa fa-plus"></i>
            </Link>
            <IfElse cond={this.state.hasError}>
                <div className="alert alert-danger">Something went wrong please try again later.</div>
                {this.state.products.data.map(product => <Product product={product} onDelete={this.onRemoveChild} />)}
            </IfElse>
        </div>
    }
}

export default ProductList;
