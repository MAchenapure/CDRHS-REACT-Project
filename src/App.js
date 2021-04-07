import { useEffect, useState } from 'react';
import CartContext from './context/CartContext';
import RouterApp from './routers/RouterApp';


// TODO - Colocar saltos de línea en el productsDataBase.json (por ej \n) y luego con métodos de strings reemplazar esos saltos por < br/>
function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartLength, setCartLength] = useState(0);

  useEffect(() => {
    // Promise that get the products info from a JSON.
    new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(
            require("./assets/productsDataBase.json")
          )
        },1000);
    }).then(resolve => setProducts(resolve)); 
  }, []);
  
  // Add item to cart logic
  const addItem = item => {
    let aux = cart;
    aux.push(item);
    setCart(aux);
  }

  // Clear cart logic
  const clearCart = () => {
    setCart([]);
    setCartLength(0);
  }

  // Returns cart length
  const getLength = () => {
    return cart.length;
  }

  // Get product petition from ItemListContainer
  const getProduct = title => {
    let aux = products.find(array => array.title == title);
    return aux;
  }

  // Repeat product validation
  const isInCart = id => {
    let valid = false;
    for (let i=0; i < cart.length; i++){
      if (cart[i].id == id){
        valid = true;
      }
    }
    return valid
  }

  // Remove cart item logic
  const removeItem = id => {
    let aux = [];

    for (let i=0; i < cart.length; i++){
      if (cart[i].id !== id){
        aux.push(cart[i]);
      }
    }
    setCart(aux);

    let auxLength = cart.length - 1; 
    setCartLength(auxLength);
  }

  const setLength = () => setCartLength(cart.length);

  return (
  <>
    <CartContext.Provider value={{cart: cart, length: cartLength, addItem: addItem, clearCart: clearCart, getLength: getLength, isInCart: isInCart, removeItem: removeItem, setLength: setLength}}>
      <RouterApp product={products} getProduct={getProduct}/>
    </CartContext.Provider>
  </>
  );
}

export default App;
