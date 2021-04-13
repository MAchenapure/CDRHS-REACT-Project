import Styles from './ItemList.css';
import Item from '../Item/Item';

const ItemList = ({product}) => {

    return(
        <>
            <div className="item-list-container">
                {product != undefined && product.map((x, index) => (
                    <Item key={index} product={x} />
                ))}
            </div>
        </>
    );
};

export default ItemList;