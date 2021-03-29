import { useEffect, useState } from 'react';
import RouterApp from './routers/RouterApp';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(
            require("./assets/productsDataBase.json")
          )
        },1000);
    }).then(resolve => setProducts(resolve)); 
  }, []);

  const getProduct = (title => {
    let aux = products.find(array => array.title == title);
    return aux;
  })

  return (
  <>
    <RouterApp product={products} getProduct={getProduct}/>
  </>
  );
}

export default App;
