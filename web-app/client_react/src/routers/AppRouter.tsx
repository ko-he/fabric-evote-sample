import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from '../pages/Home'

type AppRouterProps = {}
const AppRouter: React.FC<AppRouterProps> = _props => {
  return(
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </Router>
  )
}

export default AppRouter