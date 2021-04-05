import Style from './Cart.css'
import { useContext } from 'react'
import CartContext from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'

const Cart = () => {

    const cartContext = useContext(CartContext);
    
    console.log(cartContext.cart.map((x) => x.title))

    return(
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
}

export default Cart;