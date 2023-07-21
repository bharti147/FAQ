import React, { Component } from 'react'
import './NewQuestion.css'
import FAQ from './FAQ'

export class NewQuestion extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       newQues:"",
       finalValue:""
    }
  }
  
  render() {
    const clickHandler=(event)=>{
console.log(event.target.value);
      this.setState({newQues:event.target.value})
          }
          const submitHandler=()=>{
          //  this.setState({finalValue:this.state.newQues});
           this.setState({newQues:""})
        //  console.log(this.state.finalValue)
           
          }
    return (
      <div className='newQues'>
        
            <input  type="text" placeholder="Ask your quesries here."
              onChange={clickHandler} value={this.state.newQues}
            />
            
            <span onClick={submitHandler} >
            <i className="fa-solid fa-plus fa-xl" ></i>  
            {/* <i class="fa-solid fa-plus fa-fade fa-xl"></i> */}
            </span>

            
        
      </div>
    )
  }
}

export default NewQuestion
