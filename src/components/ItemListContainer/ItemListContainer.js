import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({product}) => {
    const [item, setItem] = useState([]);
    const { categoryId } = useParams();
    
    useEffect(() => {
        if (categoryId) {
            let aux = product.filter(array => array.category == categoryId);
            setItem(aux);
        }}, [categoryId])

    return (
        <div>
            {
                categoryId===undefined
                ? <ItemList product={product}/>
                : <ItemList product={item}/>
            }
        </div>
    );
};

export default ItemListContainer;   