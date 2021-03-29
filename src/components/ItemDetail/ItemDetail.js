import Styles from './ItemDetail.css';
import { Image } from "cloudinary-react";
import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react';

const ItemDetail = ({ product }) => {
    const [currentStock, setCurrentStock] = useState(10);

    const onAdd = (e, valueRequested) => {
        e.preventDefault();
        (valueRequested <= currentStock) ? setCurrentStock (currentStock - valueRequested) : alert('El valor solicitado supera el stock');
    }

    return (
        <section className="item-detail">
            <div className="item-img-desc-container">
                <Image cloudName="machenapure" className="img-fluid item-detail-img" publicId={product.pictureUrl}/>
                <p>{product.description}</p>    
            </div>
            <div className="item-info-purch-container">
                <h2>{product.title}</h2>
                <p>Precio: ${product.price}</p>
                <ItemCount stock={currentStock} initial={0} onAdd={onAdd}/>
            </div>
        </section>
    );
}

export default ItemDetail;