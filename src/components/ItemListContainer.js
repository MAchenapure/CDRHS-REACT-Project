import { useState } from 'react';
import ItemCount from './ItemCount';
import ItemList from './ItemList';

const ItemListContainer = ({product}) => {
    const [currentStock, setCurrentStock] = useState(10);

    const onAdd = (e, valueRequested) => {
        e.preventDefault();
        (valueRequested <= currentStock) ? setCurrentStock (currentStock - valueRequested) : alert('El valor solicitado supera el stock');
    }

    return (
        <div>
            <ItemList product={product}/>
        </div>
    );
};

export default ItemListContainer;