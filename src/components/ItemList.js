import Item from './Item';

const ItemList = ({product}) => {
    return(
        <>
            <div className="item-list-container">
                {product.map((x, index) => (
                    <Item key={index} product={x} />
                ))}
            </div>
        </>
    );
};

export default ItemList;