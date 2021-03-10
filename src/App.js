import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
    <NavBar />
    <ItemListContainer greeting="Este es un saludo que se muestra a través de props"/>
    </>
  );
}

export default App;
