import React, { Component } from 'react'
import './Block.css'

class Block extends Component {
  render() {
    const {quest} = this.props;
    return (
      <div className='quesBlock'>
     <h3>{quest}</h3>
      
      </div>
    )
  }
}

export default Block
