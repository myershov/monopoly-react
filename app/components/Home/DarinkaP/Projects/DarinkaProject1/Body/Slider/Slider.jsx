import React, { Component } from 'react'
import './Slider.styl'

class Slider extends Component {
  render () {
    return ( 
		<div className='sec3'>
            <div className='sec3-inner'>
                <div className='slider'>
                    <ul className='slider-menu'>
                        <li className='slider-menu-icon'><img src={require('./Slider_Images/sec3-icon-1.png')} alt='' /></li>
                        <li className='slider-menu-icon'><img src={require('./Slider_Images/sec3-icon-2.png')} alt='' /></li>
                        <li className='slider-menu-icon'><img src={require('./Slider_Images/sec3-icon-3.png')} alt='' /></li>
                        <li className='slider-menu-icon'><img src={require('./Slider_Images/sec3-icon-4.png')} alt='' /></li>
                        <li className='slider-menu-icon'><img src={require('./Slider_Images/sec3-icon-5.png')} alt='' /></li>
                        <li className='slider-menu-icon'><img src={require('./Slider_Images/sec3-icon-6.png')} alt='' /></li>
                    </ul>
                    <div className='slider-items'>
                        <img src={require('./Slider_Images/sec3-item-content.png')} alt='Desktop' />
                    </div>
                </div>
            </div>
    	</div>
	)
  }
}

export default Slider