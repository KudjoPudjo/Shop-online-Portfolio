import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {createStore} from "redux"
import {Provider} from "react-redux"
import Header from "./components/header/header";
import reducer from "./redux/reducer/reducer";
import ShopBar from "./components/shop-bar/shop-bar";
import ProductPage from "./components/product-page/product-page";
import { getAllState, getGirlCloth, getGirlPants, getGirlSneak, getGrilJakets, getMansCloth, getMansPants, getMansSneak, getMansJakets } from "./redux/selectors/selectors"
import CartPage from "./components/cart-page/Cart-page";
import Footer from "./components/footer/Footer";
 

const store = createStore(reducer);


function App() {

  
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Header></Header>
          <Switch> 
            <div className="Wrap-Main">
              <Route exact path="/" component={()=><ShopBar selector={getAllState}></ShopBar>}></Route>   
              <Route path="/mens/clothets" component={()=><ShopBar selector={getMansCloth}></ShopBar>}></Route>  
              <Route path="/mens/sneakers" component={()=><ShopBar selector={getMansSneak}></ShopBar>}></Route> 
              <Route path="/mens/jackets" component={()=><ShopBar selector={getMansJakets}></ShopBar>}></Route>
              <Route path="/mens/pants" component={()=><ShopBar selector={getMansPants}></ShopBar>}></Route>
              <Route path="/girls/clothets" component={()=><ShopBar selector={getGirlCloth}></ShopBar>}></Route>  
              <Route path="/girls/sneakers" component={()=><ShopBar selector={getGirlSneak}></ShopBar>}></Route> 
              <Route path="/girls/jackets" component={()=><ShopBar selector={getGrilJakets}></ShopBar>}></Route>
              <Route path="/girls/pants" component={()=><ShopBar selector={getGirlPants}></ShopBar>}></Route>
              <Route path="/product/:id" component={ProductPage}></Route>
              <Route path="/cart" component={CartPage}></Route>
            </div>
          </Switch>   
          <Footer></Footer>                
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
