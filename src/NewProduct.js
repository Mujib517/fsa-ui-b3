import React from 'react';

class NewProduct extends React.Component {

    state = {
        brand: '',
        model: '',
        price: '',
        inStock: false,
        category: 'Electronics'
    };

    onInputChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }

    onSave = () => {
        console.log(this.state);
    }


    render() {
        return <div className="col-md-4">
            <h1>New Product</h1>
            <div className="m-3">
                <label for="txtBrand" className="form-label">Brand</label>
                <input id="txtBrand" name="brand"
                    placeholder="Brand" className="form-control" type="text" onChange={this.onInputChange} />
            </div>
            <div className="m-3">
                <label for="txtModel" className="form-label">Model</label>
                <input id="txtModel" name="model" placeholder="Model" className="form-control" type="text" onChange={this.onInputChange} />
            </div>
            <div className="m-3">
                <label for="txtPrice" className="form-label">Price</label>
                <input id="txtPrice" name="price" placeholder="Price" className="form-control" type="text" onChange={this.onInputChange} />
            </div>
            <div className="m-3">
                <label for="chkPrice" className="form-label m-1">InStock</label>
                <input type="checkbox" name="inStock" id="chkPrice" className="m-1 form-check-input" onChange={this.onInputChange} />
            </div>
            <div className="m-3">
                <button onClick={this.onSave} className="btn btn-success btn-sm">Save</button>
            </div>
        </div>
    }
}

export default NewProduct;
