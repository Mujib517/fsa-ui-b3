import axios from 'axios';
import React from 'react';
import productSvc from './services/productSvc';
import ShouldRender from './ShouldRender';

class NewProduct extends React.Component {

    state = {
        product: {
            brand: '',
            model: '',
            price: '',
            inStock: false,
            category: 'Electronics',
            discount: 20
        },
        hasError: false,
        success: false
    };

    onInputChange = (evt) => {
        const product = this.state.product;
        const newProduct = {
            ...product,
            [evt.target.name]: evt.target.value
        };

        this.setState({ product: newProduct });
    }

    onSave = async () => {
        try {
            // consistent data
            // await productSvc.post(this.state.product);
            this.setState({
                success: true, hasError: false
            });

            const resetProduct = {
                category: 'Electronics',
                inStock: false,
                discount: 20
            };
            this.setState({
                product: resetProduct
            });
        } catch (e) {
            this.setState({ success: false, hasError: true });
        }
    }

    isInvalid = () => {
        const { brand, model, price } = this.state.product;
        return !brand || !model || !price;
    }

    render() {
        const { brand, model, price, inStock } = this.state.product;
        return <div className="col-md-4">
            <h1>New Product</h1>
            <ShouldRender cond={this.state.success}>
                <div className="alert alert-success">
                    Successfully Saved.
                </div>
            </ShouldRender>
            <ShouldRender cond={this.state.hasError}>
                <div className="alert alert-danger">
                    Something went wrong, please try again
                </div>
            </ShouldRender>
            <div className="m-3">
                <label for="txtBrand" className="form-label">Brand</label>
                <input id="txtBrand" name="brand" value={this.state.product.brand}
                    placeholder="Brand" className="form-control" type="text" onChange={this.onInputChange} />
                <ShouldRender cond={!brand}>
                    <span className="text-danger">Brand is required</span>
                </ShouldRender>
            </div>
            <div className="m-3">
                <label for="txtModel" className="form-label">Model</label>
                <input id="txtModel" name="model" value={model} placeholder="Model" className="form-control" type="text" onChange={this.onInputChange} />
                <ShouldRender cond={!model}>
                    <span className="text-danger">Model is required</span>
                </ShouldRender>
            </div>
            <div className="m-3">
                <label for="txtPrice" className="form-label">Price</label>
                <input id="txtPrice" name="price" value={price} placeholder="Price" className="form-control" type="number" onChange={this.onInputChange} />
                <ShouldRender cond={!price}>
                    <span className="text-danger">Price is required</span>
                </ShouldRender>
            </div>
            <div className="m-3">
                <label for="chkPrice" className="form-label m-1">InStock</label>
                <input type="checkbox" name="inStock" value={inStock} id="chkPrice" className="m-1 form-check-input" onChange={this.onInputChange} />
            </div>
            <div className="m-3">
                <button disabled={this.isInvalid()} onClick={this.onSave} className="btn btn-success btn-sm">Save</button>
            </div>
        </div>
    }
}

export default NewProduct;
