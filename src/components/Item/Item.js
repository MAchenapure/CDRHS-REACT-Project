import Styles from './Item.css';
import { Link, NavLink } from "react-router-dom";
import { Image } from "cloudinary-react";


const Item = ({product}) => {
    return(
        <>
        <div className="card item-card" style={{width: 'fit-content'}}>
            <Link to={`/item/${product.title}`}>
                <Image cloudName="machenapure" className="img-fluid" publicId={product.pictureUrl}/>
            </Link>
            <div className="card-body">
                <NavLink to={`/item/${encodeURI(product.title)}`} className="card-prod-title">
                    <h2>{product.title}</h2>
                </NavLink>
                <p>${product.price}</p>
            </div>
        </div>
        </>
    );
};

export default Item;