import { useState } from "react";

const ItemCount = ({stock, onAdd}) => {

    const [value, setValue] = useState(1);
    
    const valueChange = (e) => setValue(e.target.value);
    const subtractValue = () => (value>0) ? setValue((value)=>(value-1)):'';
    const addValue = () => setValue((value)=>(value+1));
    const getValue = () => value;

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
            <button className="cart-add-btn" onClick={(e) => {onAdd(e, getValue())}}>Añadir al carrito</button>
        </form>
     );
 };

 export default ItemCount;