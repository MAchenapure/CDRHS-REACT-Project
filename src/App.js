import { useEffect, useState } from 'react';
import CartContext from './context/CartContext';
import RouterApp from './routers/RouterApp';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

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
  const addItem = id => {
    cart.push(id);
  }

  // Clear cart logic
  const clearCart = () => {
    setCart([]);
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
  }

  return (
  <>
    <CartContext.Provider value={{cart: cart, addItem: addItem, clearCart: clearCart, isInCart: isInCart, removeItem: removeItem}}>
      <RouterApp product={products} getProduct={getProduct}/>
    </CartContext.Provider>
  </>
  );
}

export default App;
