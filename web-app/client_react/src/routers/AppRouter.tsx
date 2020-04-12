import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import RegisterVoterPage from '../pages/RegisterVoterPage'
import QueryPage from '../pages/QueryPage'

type AppRouterProps = {}
const AppRouter: React.FC<AppRouterProps> = _props => {
  return(
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/registerVoter" component={RegisterVoterPage} />
      <Route exact path="/query" component={QueryPage} />
    </Switch>
  )
}

export default AppRouter