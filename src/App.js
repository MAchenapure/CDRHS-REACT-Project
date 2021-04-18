import { useEffect, useState } from 'react'
import CartContext from './context/CartContext'
import RouterApp from './routers/RouterApp'
import {getFirestore} from './config/Firebase'
import firebase from 'firebase/app'
import 'firebase/firestore'

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({items: [], cartPrice: 0});
  const [cartLength, setCartLength] = useState(0);
  const db = getFirestore(); 
  const allProdsDB = db.collection("Products");

  // Get products from Firebase
  useEffect(() => { 
    
    allProdsDB.get().then(res => {
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
    aux.items.push(item);
    aux.cartPrice += Number(item.totalPrice);
    setCart(aux);
  }

  // Clear cart logic
  const clearCart = () => {
    setCart({items: [], cartPrice: 0});
    setCartLength(0);
  }

  const buyOrder = () => {
    let buyerData = {
      name: 'Hardcoded user',
      phone: '541123456789',
      email: 'harduser@test.com'
    };
    
    let itemsData = []; 
    cart.items.map(item => {
      let aux = {
        'id': item.id,
        'title': item.title,
        'price': item.price        
      };
      itemsData.push(aux)
    });

    let ordenDetail = {
      buyer: buyerData,
      items: itemsData,
      date: firebase.firestore.Timestamp.fromDate(new Date()),
      price: cart.cartPrice
    }

    const ordersDB = db.collection("Orders");

    ordersDB.add(ordenDetail).then(res => {
      alert(`Compra realizada correctamente, id de orden: ${res.id}`);
      clearCart();
    }).catch( error => console.log("Error con al exportar la orden a Firebase: " + error)); 

  }

  // Returns cart length
  const getLength = () => {
    return cart.items.length;
  }

  // Get product petition from ItemListContainer
  const getProduct = title => {
    let aux = products.find(array => array.title == title);
    return aux;
  }

  // Repeat product validation
  const isInCart = id => {
    let valid = false;
    for (let i=0; i < cart.items.length; i++){
      if (cart.items[i].id == id){
        valid = true;
      }
    }
    return valid
  }

  // Remove cart item logic
  const removeItem = id => {
    let aux = {items: [], cartPrice: 0};

    for (let i=0; i < cart.items.length; i++){
      if (cart.items[i].id !== id){
        aux.items.push(cart.items[i]);
        aux.cartPrice += Number(cart.items[i].totalPrice);
      }
    }
    setCart(aux);

    let auxLength = cart.items.length - 1; 
    setCartLength(auxLength);
  }

  const setLength = () => setCartLength(cart.items.length);

  return (
  <>
    <CartContext.Provider value={{cart: cart, length: cartLength, addItem: addItem, buyOrder: buyOrder, clearCart: clearCart, getLength: getLength, isInCart: isInCart, removeItem: removeItem, setLength: setLength}}>
      <RouterApp product={products} getProduct={getProduct}/>
    </CartContext.Provider>
  </>
  );
}

export default App;
