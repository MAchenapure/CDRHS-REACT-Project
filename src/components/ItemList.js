import Item from './Item';

const ItemList = ({product}) => {

    return(
        <>
            <h2>Lista de productos</h2>
            <ul>
                {product.map((x, index) => (
                    <Item key={index} product={x} />
                ))}
            </ul>
        </>
    );
};

export default ItemList;