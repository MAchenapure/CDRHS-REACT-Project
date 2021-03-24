import ItemDetailContainer from "./ItemDetailContainer";
import { Link, NavLink } from "react-router-dom";


const Item = ({product}) => {
    return(
        <>
        <div className="card item-card" style={{width: 18 + 'rem'}}>
            <Link to={`/item/${product.title}`}>
                <img src={product.pictureUrl} className="card-img-top"/>
            </Link>
            <div className="card-body">
                <NavLink to={`/item/${product.title}`} className="card-prod-title">
                    <h5>{product.title}</h5>
                </NavLink>
                <p>${product.price}</p>
            </div>
        </div>
        </>
    );
};

export default Item;