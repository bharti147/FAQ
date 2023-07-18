import React, { Component } from 'react'
import './Faq.css'
import Block from './Block'

class FAQ extends Component(){
 
  
  
  render() {
    const { question } = this.props;
    
    return (
      <div className='FAQ'>
        <h2>Frequently Asked Questions</h2>
        {question.map(val=>{
          console.log(val.ques)
        })}
       {/* <Block question={question}/>
      */}
      </div>
    )
  }
}

export default FAQ
