import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import NavBar from '../components/NavBar/NavBar';

const RouterApp = ({product, getProduct}) => {
    return (
        <>
        <BrowserRouter>
          <NavBar /> 
          <Switch>
            <Route exact path="/category/:categoryId">
              <ItemListContainer product={product}/>
            </Route>
            <Route path="/item/:productTitle">
              <ItemDetailContainer getProduct={getProduct}/>
            </Route>
            <Route exact path="/">
              <ItemListContainer product={product}/>
            </Route>
          </Switch>
        </BrowserRouter>
        </>
    );
}

export default RouterApp;