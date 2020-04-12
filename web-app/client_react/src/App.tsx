import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'
import AppRouter from './routers/AppRouter'

type AppProps = {}

const App: React.FC<AppProps> = _props  => {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/registerVoter">RegisterVoter</Link></li>
              <li><Link to="/query">QueryAll</Link></li>
            </ul>

            <AppRouter />
          </div>
        </header>
      </div>
    </BrowserRouter>
  )
}

export default App
