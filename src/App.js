import { useEffect, useState } from 'react'
import CartContextProvider from './context/CartContextProvider'
import RouterApp from './routers/RouterApp'
import { getFirestore } from './config/Firebase'
import firebase from 'firebase/app'
import 'firebase/firestore'

function App() {
  const [products, setProducts] = useState([]);
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
  
 
  // Get product petition from ItemListContainer
  const getProduct = title => {
    let aux = products.find(array => array.title == title);
    return aux;
  }

  return (
  <>
    <CartContextProvider>
      <RouterApp product={products} getProduct={getProduct}/>
    </CartContextProvider>
  </>
  );
}

export default App;
