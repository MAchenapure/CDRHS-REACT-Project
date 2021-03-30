import Styles from './ItemDetail.css';
import { Image } from "cloudinary-react";
import ItemCount from '../ItemCount/ItemCount';
import { useEffect, useState } from 'react';

const ItemDetail = ({ product }) => {
    const [currentStock, setCurrentStock] = useState('');
    const [dinamicStock, setDinamicStock] = useState('');
    const [finalValid, setFinalValid] = useState('');

    const onAdd = (e, valueRequested) => {
        e.preventDefault();

        if(valueRequested <= dinamicStock) {
            setDinamicStock (dinamicStock - valueRequested)
            setFinalValid(true);
        } else {
            alert('El valor solicitado supera el stock');
        }
    }
    
    useEffect(() => {
        setCurrentStock(product.stock);
        setDinamicStock(currentStock);
        setFinalValid(false);
    }, [currentStock]);

    return (
        <section className="item-detail">
            <div className="item-img-desc-container">
                <Image cloudName="machenapure" className="img-fluid item-detail-img" publicId={product.pictureUrl}/>
                <p>{product.description}</p>
            </div>
            <div className="item-info-purch-container">
                <h2>{product.title}</h2>
                <p>Precio: ${product.price}</p>
                <p>Stock: {dinamicStock}</p>
                {
                    dinamicStock > 0 
                    ? <ItemCount stock={dinamicStock} initial={0} onAdd={onAdd} finalValid={finalValid} />
                    : <p> No hay stock! </p>
                }
            </div>
        </section>
    );
}

export default ItemDetail;