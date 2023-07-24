import FAQ from './FAQ';
import './App.css';
import NewQuestion from './NewQuestion';

import React, { Component } from 'react'

 class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [
        {
          id: '1',
          ques: "what is the duration of this course?",
          answer: "10 months"
        },
        // Additional questions go here
      ],
    };
  }
           submitHandler=(ques)=>{
         
         this.setState((prevState) => ({
          questions: [...prevState.questions,ques],
         }));
          
        }
        // handleAddQuestion = (newQuestion) => {
        //   this.setState((prevState) => ({
        //     questions: [...prevState.questions, newQuestion],
        //   }));
        // };
  render() {
    
    const { questions } = this.state;

    return (
      <div className="App">
     <NewQuestion onSave={this.submitHandler}/>
     <br/>
     <br/>
         <FAQ quest={questions}/>
        

        
      </div>
    )
  }
}

export default App


// import React, { Component } from 'react';
// import FAQ from './FAQ';
// import NewQuestion from './NewQuestion';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       questions: [
//         {
//           id: '1',
//           ques: "what is the duration of this course?",
//         },
//         // Additional questions go here
//       ],
//     };
//   }

//   handleAddQuestion = (newQuestion) => {
//     this.setState((prevState) => ({
//       questions: [...prevState.questions, newQuestion],
//     }));
//   };

//   render() {
//     const { questions } = this.state;

//     return (
//       <div className="App">
//         <FAQ quest={questions} />
//         <br />
//         <br />
//         <NewQuestion onAddQuestion={this.handleAddQuestion} />
//       </div>
//     );
//   }
// }

// export default App;

