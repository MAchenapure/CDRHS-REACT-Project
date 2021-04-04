const CartItem = ({product}) => {
    return (
        <li>
            {product.title}
            {product.quantity}
            {product.totalPrice}
        </li>
    )
}

export default CartItem;