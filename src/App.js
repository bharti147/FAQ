// import FAQ from './FAQ';
// import './App.css';


// function App() {
//   const questions=[

//     {
//       'id':'1',
//       'ques':"what is the duration of this course?"
//     },
//     {
//       'id':'2',
//       'ques':"what is the duration of this course?"
//     },
//     {
//       'id':'3',
//       'ques':"what is the duration of this course?"
//     }
//   ];
//   return (
    
//     <div className="App">
     
        
//           <FAQ question={questions}/>
        
        
//     </div>
//   );
// }

// export default App;
import FAQ from './FAQ';
import './App.css';
import NewQuestion from './NewQuestion';

import React, { Component } from 'react'

 class App extends Component {
  render() {
    const questions=[

          {
            'id':'1',
            'ques':"what is the duration of this course what is the duration of this course? what is the duration of this course?"
                    
          },
          {
            'id':'2',
            'ques':"what is the duration of this course?"
          },
          {
            'id':'3',
            'ques':"what is the duration of this course?"
          }
        ];
    return (
      <div className="App">
     <NewQuestion/>
     <br/>
     <br/>
         <FAQ quest={questions}/>
        

        
      </div>
    )
  }
}

export default App

