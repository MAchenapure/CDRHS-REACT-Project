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
  
  // Add item to cart logic.
  const addItem = id => {
    cart.push(id);
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

  return (
  <>
    <CartContext.Provider value={{cart: cart, addItem: addItem, isInCart: isInCart}}>
      <RouterApp product={products} getProduct={getProduct}/>
    </CartContext.Provider>
  </>
  );
}

export default App;
