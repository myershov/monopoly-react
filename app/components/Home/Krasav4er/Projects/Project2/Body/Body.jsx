import React, { Component } from 'react'
import './Body.styl'

class Body extends Component {
  constructor () {
    super()
    this.state = {
      x1: null,
      x2: null,
      a: null,
      b: null,
      c: null
    }
    this.handleResult = this.handleResult.bind(this)
    this.handleA = this.handleA.bind(this)
    this.handleB = this.handleB.bind(this)
    this.handleC = this.handleC.bind(this)
  }
  handleA (e) {
    this.setState({a: e.target.value})
  }
  handleB (e) {
    this.setState({b: e.target.value})
  }
  handleC (e) {
    this.setState({c: e.target.value})
  }
  handleResult () {
    const { a, b, c } = this.state
    const { x1, x2 } = this.calculate(a, b, c)
    this.setState({ x1, x2 })
  }
  calculate (a, b, c) {
    const d = b * b - 4 * a * c
    if (d === 0) {
      return { x1: -b / (2 * a), x2: '' }
    } else if (d > 0) {
      const x1 = (-b + Math.sqrt(d)) / (2 * a)
      const x2 = (-b - Math.sqrt(d)) / (2 * a)
      return { x1, x2 }
    } else {
      return { x1: 'no roots', x2: 'no roots' }
    }
  }
  render () {
    return (
      <div className='block-body'>
        <div className='block-body-logical'>
          <input type='number' placeholder='Enter A' onClick={this.handleA} />
          <input type='number' placeholder='Enter B' onClick={this.handleB} />
          <input type='number' placeholder='Enter C' onClick={this.handleC} />
          <button type='button' onClick={this.handleResult}>get result</button>
        </div>
        {`x1 = ${this.state.x1}`}
        {`x2 = ${this.state.x2}`}
      </div>
    )
  }
}
export default Body
