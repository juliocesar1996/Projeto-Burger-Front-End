import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import paths from '../constantes/paths'
import { Home, Products, Register, Login, Cart, Admin } from '../containers'

/**  import PrivateRoute from './private-route' **/

function Routes() {
  return (
    <Router>
      <Switch>
        <Route component={Login} path="/login" />
        <Route component={Register} path="/cadastro" />
        <Route exact component={Home} path="/" />
        <Route component={Products} path="/produtos" />
        <Route component={Cart} path="/carrinho" />

        <Route component={Admin} path={paths.Order} isAdmin />
        <Route component={Admin} path={paths.Products} isAdmin />
        <Route component={Admin} path={paths.NewProduct} isAdmin />
        <Route component={Admin} path={paths.EditProduct} isAdmin />
      </Switch>
    </Router>
  )
}

export default Routes

/** <PrivateRoute exact component={Home} path="/" />
 *  <PrivateRoute component={Products} path="/produtos" />
 *  <PrivateRoute component={Cart} path="/carrinho" />
 *
 *  <PrivateRoute component={Admin} path={paths.Order} isAdmin/>
 *  <PrivateRoute component={Admin} path={paths.Products} isAdmin/>
 *  <PrivateRoute component={Admin} path={paths.NewProduct} isAdmin />
 *  <PrivateRoute component={Admin} path={paths.EditProduct} isAdmin />



 *
 *  **/
