import { useEffect, useState } from 'react'
import CartContext from './context/CartContext'
import RouterApp from './routers/RouterApp'
import {getFirestore} from './config/Firebase'

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartLength, setCartLength] = useState(0);

  useEffect(() => {
    const db = getFirestore(); 
    const allProds = db.collection("Products");

    allProds.get().then(res => {
      if (res.size > 0){
        setProducts(res.docs.map(x => {
          let aux = {id: x.id, ...x.data()};
          return aux;
        }));
      }
    }).catch( error => console.log("Error con el get a Firebase: " + error));
  },[]);
  
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
