import Styles from './CartItem.css'
import { Image } from "cloudinary-react"
import TrashCan from '../../images/trash-solid.svg';

const CartItem = ({product, removeItem}) => {
    return (
        <li>
            <div className="item-container">
                <Image cloudName="machenapure" className="img-fluid item-img" publicId={product.pictureUrl} />
                <div className="item-title-quant">
                    <h4>{product.title}</h4>
                    <span>Cantidad: {product.quantity}</span>
                </div>
                <span className="item-price">
                    $ {product.totalPrice}
                </span>
                <button className="item-remove-btn" onClick={()=>removeItem(product.id)}>
                    <img src={TrashCan} alt="Eliminar" className="d-inline-block"/>
                </button>
            </div>
        </li>
    )
}

export default CartItem;