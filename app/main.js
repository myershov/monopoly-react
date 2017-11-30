import { HashRouter as Router, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard.jsx'
import Header from './components/Header/Header.jsx'
import Type from './components/Type/Type.jsx'
import Home from './components/Home/Home.jsx'
import Login from './components/Login/Login.jsx'
import ReactDOM from 'react-dom'
import React from 'react'
import './main.styl'

ReactDOM.render(
  <Router>
    <div>
      <Header />
      <Route exact path='/' component={Home} />
      <Route exact path='/dashboard' component={Dashboard} />
<<<<<<< HEAD
      <Route exact path='/login' component={Login} />
=======
      <Route exact path='/type' component={Type} />
>>>>>>> 489704707b3c5e75768e61d459492b3f3eb00929
    </div>
  </Router>,
  document.getElementById('root')
)
