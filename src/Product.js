import { Link } from 'react-router-dom';

import PhoneIcon from './assets/img/phone-icon.png';
import IfElse from './IfElse';


function Product({ product }) {
    return <>
        <div className="card col-md-4">
            <IfElse cond={product.img}>
                <img className="card-img" src={product.img} />
                <img className="card-img" src={PhoneIcon} />
            </IfElse>
            <div className="card-body">
                <Link to={"/products/" + product._id}>
                    <div className="card-title">{product.brand} {product.model}</div>
                    <b>${product.price}</b>
                    <div>
                        In Stock: <input type="checkbox" checked={product.inStock} />
                    </div>
                </Link>
            </div>
            <div className="card-footer">
                <button className="btn btn-sm btn-danger">
                    Add to cart &nbsp;
                    <i class="fa fa-cart-plus"></i>
                </button>
            </div>
        </div>
        <br />
    </>
}

export default Product;