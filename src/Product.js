import { Link } from 'react-router-dom';
import moment from 'moment';

import PhoneIcon from './assets/img/phone-icon.png';
import IfElse from './IfElse';
import productSvc from './services/productSvc';

import './Product.css';

function Product({ product, onDelete }) {

    const calculateDiscountedPrice = () => {
        const discountedAmount = product.price * product.discount / 100;
        return product.price - discountedAmount;
    };

    const onRemove = async () => {
        const result = window.confirm('Are you sure you want to delete?');
        if (result) {
            await productSvc.remove(product._id);
            onDelete();
        }
    };
    
    return <>
        <div className="card col-md-4">
            <IfElse cond={product.img}>
                <img className="card-img" src={product.img} />
                <img className="card-img" src={PhoneIcon} />
            </IfElse>
            <div className="card-body">
                <Link to={"/products/" + product._id}>
                    <div className="card-title">{product.brand} {product.model}</div>
                    <div className="old-price"><b>${product.price}</b></div>
                    <div className="new-price"><b>${calculateDiscountedPrice()}</b></div>
                    <div>
                        In Stock: <input type="checkbox" checked={product.inStock} />
                    </div>
                    <div>
                        Last Updated: {moment(product.updatedAt).fromNow()}
                    </div>
                </Link>
            </div>
            <div className="card-footer">
                <button className="btn btn-sm btn-danger">
                    Add to cart &nbsp;
                    <i className="fa fa-cart-plus"></i>
                </button>

                <button className="btn btn-sm btn-danger m-1" onClick={onRemove}>
                    <i className="fa fa-close"></i>
                    Delete
                </button>
            </div>
        </div>
        <br />
    </>
}

export default Product;