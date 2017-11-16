import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './DarinkaP.styl'

class DarinkaP extends Component {
  render () {
	return (
		<div id='home'>
			<div className='title'>Projects by DarinkaP</div>
				<Link to={'/html/DarinkaP/project_1'}>Project_1</Link><br />
				<Link to={'/html/DarinkaP/project_2'}>Project_2</Link><br />
			<div className='test' />
		</div>
	)
  }
}
export default DarinkaP
