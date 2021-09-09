import React from 'react';
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'
import {Switch, Route} from "react-router-dom"
import Home from '../Home/Home'
import Cart from '../Cart/Cart'
import Category from '../../data/Category'


const Routes = ({greeting}) => {

    return(
        <main>
            <Switch>

                <Route path="/" exact>
                    <Home greeting="HORA AZUL DoP STORE"/>
                </Route>
                <Route path="/category/:categoryName">
                    <ItemListContainer/>
                </Route>
                <Route exact path = "/item/:productId">
                    <ItemDetailContainer />
                 </Route>
                 <Route path='/category/:category'>
					<Category/>
				</Route>      
                <Route path="/cart">
                    <Cart/>
                </Route>

            </Switch>

        </main>
    )
}


export default Routes;
