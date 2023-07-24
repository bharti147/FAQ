// import React, { Component } from 'react'
// import './Faq.css'
// import Block from './Block'

// class FAQ extends Component{
 
  
  
//   render() {
//   const {quest} = this.props;
//   const {newQues} = this.props;
    
//     return (
//       <div className='FAQ'>
//       <h2>Frequently Asked Questions</h2>
//     {/* {quest.map(val=>{
//       return(
//         <Block quest={val.ques} />
//       )
      
//       console.log(val)
//     })} */}
//     {quest.map((val) => (
//           <Block key={val.id} quest={val.ques} />
//         ))}
    

       
//       </div>
//     )
//   }
// }

// export default FAQ;

import React, { Component } from 'react';
import './Faq.css';
import Block from './Block';

class FAQ extends Component {
  render() {
    const { quest } = this.props;

    return (
      <div className="FAQ">
        <h2>Frequently Asked Questions</h2>
        {quest.map((val) => (
          <Block key={val.id} quest={val.ques} answer={val.answer} />
        ))}
      </div>
    );
  }
}

export default FAQ;

