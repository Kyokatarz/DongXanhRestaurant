import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Menu from './pages/Menu'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/menu" component={Menu} />
  </Switch>
)

export default Routes
