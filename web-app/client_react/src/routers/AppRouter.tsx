import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'

type AppRouterProps = {}
const AppRouter: React.FC<AppRouterProps> = _props => {
  return(
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/registerVoter" component={React.Fragment} />
    </Switch>
  )
}

export default AppRouter