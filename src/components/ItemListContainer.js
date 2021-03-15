import { useState } from 'react';
import ItemCount from './ItemCount';

const ItemListContainer = ({greeting}) => {
    const [currentStock, setCurrentStock] = useState(10);

    const onAdd = (e, valueRequested) => {
        e.preventDefault();
        (valueRequested <= currentStock) ? setCurrentStock (currentStock - valueRequested) : alert('El valor solicitado supera el stock');
    }

    return (
        <div>
            <p>{greeting}</p>
            <ItemCount stock={currentStock} onAdd={onAdd}/>
        </div>
    );
};

export default ItemListContainer;