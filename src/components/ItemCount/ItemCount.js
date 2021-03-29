import Styles from './ItemCount.css';
import { useState } from "react";

const ItemCount = ({stock, initial, onAdd}) => {

    const [value, setValue] = useState(initial);
    
    const valueChange = (e) => setValue(e.target.value);
    const subtractValue = () => (value>0) && setValue((value) => (value-1));
    const addValue = () => {
        (value<stock) ? setValue((value) => (value+1)) : (setValue((value) => (value=stock)));
    };

    return (
        <form className="form-quant-input">
            Stock: {stock}
            <div className="quant-input-container">
                <button className="quant-input-btn btn-minus" onClick={(e) => {e.preventDefault();subtractValue()}}>
                    <span>-</span>
                </button>
                <input className="quant-input" placeholder={value} value={value} onChange={(e) => valueChange(e)}></input>
                <button className="quant-input-btn btn-plus" onClick={(e) => {e.preventDefault();addValue()}}>
                    <span>+</span>
                </button>
            </div>
            <button className="cart-add-btn" onClick={e => onAdd(e, value)}>Añadir al carrito</button>
        </form>
    );
};

 export default ItemCount;