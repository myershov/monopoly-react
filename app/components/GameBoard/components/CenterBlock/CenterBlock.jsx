import React, { Component } from 'react'
import PropTypes from 'prop-types'

class CenterBlock extends Component {
  render () {
    return (
      <div>
        <button type='button' onClick={this.props.changeTipPositions}>asdas</button>
      </div>
    )
  }
}
CenterBlock.propTypes = {
  changeTipPositions: PropTypes.func
}
export default CenterBlock
