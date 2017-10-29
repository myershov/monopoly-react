import React, { Component } from 'react'
import './Slider.styl'

const slides = [
  {label: 'Yellow', className: 'block y'},
  {label: 'Green', className: 'block g'},
  {label: 'Red', className: 'block r'}
]

class Slider extends Component {
  constructor () {
    super()
    this.state = {
      active: 0
    }
    this.handleRight = this.handleRight.bind(this)
    this.handleLeft = this.handleLeft.bind(this)
  }
  handleRight () {
    let active = this.state.active + 1
    if (active === slides.length) active = 0
    this.setState({active})
  }
  handleLeft () {
    let active = this.state.active - 1
    if (active === -1) active = slides.length - 1
    this.setState({active})
  }

  render () {
    return (
      <div>
        <div className='slider'>
          <button className='left' onClick={this.handleLeft}>left</button>
          <div className='window'>
            <div className='train' id='train'>
              {slides.map((slide, key) => key === this.state.active && <div key={key} className={slide.className}>{slide.label}</div>)}
            </div>
          </div>
          <button className='right' onClick={this.handleRight}>right</button>
        </div>
        <div className='textmain'>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium. Praesent urna<br />
          urna, venenatis at ultrices ac, viverra in turpis. Duis sceler isque mauri sut metus.
        </div>
        <div className='image' />
      </div>
    )
  }
}
export default Slider
