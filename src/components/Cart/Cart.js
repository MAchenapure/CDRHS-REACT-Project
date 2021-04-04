import { useContext } from 'react'
import CartContext from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'

const Cart = () => {

    const cartContext = useContext(CartContext);
    
    console.log(cartContext.cart.map((x) => x.title))

    return(
        <ul>
            {
                cartContext.cart.map(x => (
                    <CartItem product={x}/>
                ))
            }
        </ul>
    )
}

export default Cart;