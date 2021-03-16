import { useEffect, useState } from 'react';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  const [product, setProducts] = useState([]);

  useEffect(() => {
    new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(
            [{
            id:'001',
            title: 'Peine de madera',
            price: 300,
            pictureUrl: "./images/products/PEINES MADERA.jpg"
            }, {
            id:'002',
            title: 'Luffa esponja', 
            price: 200,
            pictureUrl: "./images/products/LUFFAS.jpg"
            }, {
            id:'003', 
            title: 'Espejo de madera', 
            price: 250,
            pictureUrl: "./images/products/ESPEJO MADERA.jpg"}])}
            ,1000);
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
