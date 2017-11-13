import React, { Component } from 'react'
import './Header.styl'

class Header extends Component {
  render () {
    return (
    <div className='monopoly-header'>
        <div className='monopoly-header-inner'>
            <div className='header-menu'>
                <div className='menu'>
                    <img className='icon' src='https://d30y9cdsu7xlg0.cloudfront.net/png/659805-200.png'/>
                    <div className='text'>МЕНЮ</div>
                </div>
            </div>
            <div className='header-user-form'>
				<a href='#'  className='sing-in'>Увійти</a>
				<a href='#'  className='sing-up'>Реєстрація</a> 				
				<a href='#' className='social-media-facebook'>
						<img src='https://digiday.com/wp-content/themes/digiday/static/images/icon_social_facebook-white.svg' alt='Facebook' />
				</a> 
				<a href='#'  className='social-media-twitter'>
						<img src='https://digiday.com/wp-content/themes/digiday/static/images/icon_social_twitter-white.svg' alt='Twitter' />
			    </a> 

            </div>
        </div>
    </div>
    )
  }
}
export default Header
