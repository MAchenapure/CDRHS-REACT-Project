import { useEffect, useState } from 'react';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  const [product, setProducts] = useState([]);

  useEffect(() => {
    new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(
            require("./assets/productsDataBase.json")
          )
        },2000);
    }).then(resolve => setProducts(resolve)); 
  }, []);

  return (
    <>
    <NavBar />
    <ItemListContainer product={product}/>
    </>
  );
}

export default App;
