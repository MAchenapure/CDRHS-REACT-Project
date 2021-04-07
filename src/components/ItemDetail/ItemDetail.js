import Styles from './ItemDetail.css';
import { Image } from "cloudinary-react";
import ItemCount from '../ItemCount/ItemCount';
import { useContext, useEffect, useState } from 'react';
import CartContext from '../../context/CartContext';

const ItemDetail = ({ product }) => {
    const [currentStock, setCurrentStock] = useState('');
    const [dinamicStock, setDinamicStock] = useState('');
    const [finalValid, setFinalValid] = useState('');
    const [description, setDescription] = useState('');

    // Cart Context
    const cartCont = useContext(CartContext);
    
    useEffect(() => {
        setCurrentStock(product.stock);
        setDinamicStock(currentStock);
        setFinalValid(false);
        // Split of product.description to be able to print every sentence as a paragraph with breaklines (Render - Line 53)
        product.description !== undefined && setDescription(product.description.split("<br>"));
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
                    totalPrice: product.price * valueRequested,
                    pictureUrl: product.pictureUrl
                });

                cartCont.setLength();
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
                <span>
                    {description !== '' && description.map((x, index) => <p key={index}>{x}</p>)}
                </span>
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