import { Project1 } from './components/Home/Krasav4er/Projects'
import { DarinkaProject1 } from './components/Home/DarinkaP/Projects'
import { DarinkaProject2 } from './components/Home/DarinkaP/Projects'
import { HashRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import { Krasav4er } from './components/Home'
import { DarinkaP } from './components/Home'
import ReactDOM from 'react-dom'
import React from 'react'
import './main.styl'

ReactDOM.render(
  <Router>
    <div>
      <Route exact path='/' component={Home} />
      <Route exact path='/html/Krasav4er' component={Krasav4er} />
	  <Route path='/html/Krasav4er/project1' component={Project1} />
	  <Route exact path='/html/DarinkaP' component={DarinkaP} />
	  <Route path='/html/DarinkaP/project_1' component={DarinkaProject1} />
	  <Route exact path='/html/DarinkaP' component={DarinkaP} />
	  <Route path='/html/DarinkaP/project_2' component={DarinkaProject2} />
    </div>
  </Router>,
  document.getElementById('root')
)
