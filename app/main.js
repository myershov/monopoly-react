import { Header, GameBoard, Dashboard, Type, Home, Login, Chat, Signup } from './components'
import { HashRouter as Router, Route } from 'react-router-dom'
import { createStore, combineReducers } from 'redux'
import * as reducers from './store/reducers'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import React from 'react'
import './main.styl'
const store = createStore(combineReducers(reducers))

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Header />
        <Route exact path='/' component={Home} />
        <Route exact path='/dashboard' component={Dashboard} />
        <Route exact path='/gameboard' component={GameBoard} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/type' component={Type} />
        <Route exact path='/chat' component={Chat} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
)
