import Styles from './ItemDetail.css';
import { Image } from "cloudinary-react";
import ItemCount from '../ItemCount/ItemCount';
import { useContext, useEffect, useState } from 'react';
import CartContext from '../../context/CartContext';

const ItemDetail = ({ product }) => {
    const [currentStock, setCurrentStock] = useState('');
    const [dinamicStock, setDinamicStock] = useState('');
    const [finalValid, setFinalValid] = useState('');

    // Cart Context
    const cartCont = useContext(CartContext);
    
    useEffect(() => {
        setCurrentStock(product.stock);
        setDinamicStock(currentStock);
        setFinalValid(false);
    }, [currentStock]);

    const onAdd = (e, valueRequested) => {
        e.preventDefault();

        if (valueRequested <= dinamicStock) {
            if (!cartCont.isInCart(product.id)){
                setDinamicStock (dinamicStock - valueRequested)
                setFinalValid(true);
    
                cartCont.addItem({
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    quantity: valueRequested,
                    totalPrice: product.price * valueRequested
                });
            } else {
                alert('Este producto ya está añadido en el carrito')
            }
            
        } else {
            alert('El valor solicitado supera el stock');
        }
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
                <p>Stock: {dinamicStock}</p>
                {
                    dinamicStock > 0 
                    ? <ItemCount stock={dinamicStock} initial={0} onAdd={onAdd} finalValid={finalValid} />
                    : <p>¡ Por el momento no contamos con más stock !</p>
                }
            </div>
        </section>
    );
}

export default ItemDetail;