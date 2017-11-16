import React, { Component } from 'react'
import Slider from './Slider/Slider.jsx'
import './Body.styl'

class Body extends Component {
  render () {
    return (
    <div className='wrap'>
    	<div className='banner'>
			<div className='banner-inner'>
				<div className='slider'>
					<div className='slider-menu'>
						<div className='slider-menu-item'>
							<img src={require('../Images/banner-menu-item-1.png')} alt='Desktop' />
						</div>
						<div className='slider-menu-item'>
							<img src={require('../Images/banner-menu-item-2.png')} alt='Tablet' />
						</div>
						<div className='slider-menu-item'>
							<img src={require('../Images/banner-menu-item-3.png')} alt='Phone' />
						</div>
					</div>
					<div className='slider-items'>
						<img src={require('../Images/banner-content.png')} alt='Phone' />
					</div>
				</div>
			</div>
    	</div>
    	<div className='about'>
			<div className='about-inner'>
				<h3 className='title'>About minimal</h3>
				<h4 className='sub-title'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</h4>
				<div className='img'><img src={require('../Images/about-img.png')} alt='App'></img></div>
			</div>
    	</div>
    	<div>
          <Slider />
    	</div>
		<div className='sec4'>
			<div className='sec4-inner'>
				<div className='text'><img src={require('../Images/sec4-text.png')} alt=''/></div>
				<div className='img'><img src={require('../Images/sec4-right.png')} alt=''/></div>
			</div>
    	</div>
    </div>
    )
  }
}
export default Body
