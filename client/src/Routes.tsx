import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Product from './pages/Product'
import Menu from './pages/Menu'
import Contact from './pages/Contact'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/products/:id" component={Product} />
    <Route exact path="/menu" component={Menu} />
    <Route exact path="/contact" component={Contact} />
  </Switch>
)

export default Routes
