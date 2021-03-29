import Styles from './ItemDetailContainer.css';
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = ({ getProduct }) => {
    const [product, setProducts] = useState([]);
    const {productTitle} = useParams();

    useEffect(() => {
        setProducts(getProduct(productTitle));
    },[]);

    return (
        <>
        <div className="item-detail-container">
            <ItemDetail product={product}/>
        </div>
        </>
    );
}

export default ItemDetailContainer;