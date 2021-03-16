const Item = ({product}) => {
    return(
        <>
        <li className="product-item-list"><img className="prod-img" src={product.pictureUrl}></img> - <b>Producto:</b> {product.title} - <b>Precio:</b> ${product.price}</li>
        </>
    );
};

export default Item;