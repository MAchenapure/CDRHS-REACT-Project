import Item from './Item';

const ItemList = ({product}) => {
    return(
        <>
            <h2>Lista de productos</h2>
            <div className="item-list-container">
                {product.map((x, index) => (
                    <Item key={index} product={x} />
                ))}
            </div>
        </>
    );
};

export default ItemList;