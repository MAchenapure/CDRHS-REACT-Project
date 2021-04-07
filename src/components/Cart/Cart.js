import Style from './Cart.css'
import { useContext } from 'react'
import CartContext from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import { NavLink } from 'react-router-dom';

const Cart = () => {

    const cartContext = useContext(CartContext);

    // Conditional rendering
    if (cartContext.cart.length != 0) {
        return (
            <div className="main-container">
                <div className="cart-detail-container">
                    <ul className="cart-detail-ul">
                        {
                            cartContext.cart.map((x, index) => (
                                <CartItem key={index} product={x} removeItem={cartContext.removeItem}/>
                            ))
                        }
                    </ul>
                    <button className="btn-clear-cart" onClick={()=>cartContext.clearCart()}>
                        Vaciar carrito
                    </button>
                </div>
            </div>
        )
    } else {
        return(
            <div className="main-container">
                <div className="empty-cart-container">
                    <h3>Su carrito está vacío!</h3>
                    <div>
                        <NavLink to={`/`}>
                            Ver catálogo de productos
                        </NavLink>
                    </div>
                </div>
            </div>
        )
    }

}

export default Cart;