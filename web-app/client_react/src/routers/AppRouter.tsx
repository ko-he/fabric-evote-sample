import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

type AppRouterProps = {}
const AppRouter: React.FC<AppRouterProps> = _props => {
  return(
    <Router>
      <Switch>
        <Route exact path="/" component={React.Fragment} />
      </Switch>
    </Router>
  )
}

export default AppRouter