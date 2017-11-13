import React, { Component } from 'react'
import './Body.styl'

class Body extends Component {
  render () {
    return (
    <div className='monopoly-app'>
    	<div className='monopoly-banner'>
			<div className='monopoly-banner-inner'>
				<img src='app/components/Home/DarinkaP/Projects/DarinkaProject2/Images/monopoly-banner.png' alt='Monopoly' />
			</div>
    	</div>
		<div className='game'>
			<a href='#' className='create'>СТВОРИТИ ГРУ</a>
			<a href='#' className='play'>ДОЛУЧИТИСЬ ДО ГРИ</a>
		</div>
    </div>
    )
  }
}
export default Body