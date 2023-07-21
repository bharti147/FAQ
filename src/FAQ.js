import React, { Component } from 'react'
import './Faq.css'
import Block from './Block'

class FAQ extends Component{
 
  
  
  render() {
  const {quest} = this.props;
  const {newQues} = this.props;
    
    return (
      <div className='FAQ'>
      <h2>Frequently Asked Questions</h2>
    {quest.map(val=>{
      return(
        <Block quest={val.ques} key={val.id}/>
      )
    })}
    

       
      </div>
    )
  }
}

export default FAQ;
