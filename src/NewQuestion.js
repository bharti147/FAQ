import React, { Component } from "react";
import "./NewQuestion.css";
import FAQ from "./FAQ";

export class NewQuestion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newQues: "",
   
    };
  }
 clickHandler = (event) => {
        console.log(event.target.value);
        this.setState({ newQues: event.target.value });
      };
  //   submitHandler = () => {
  //     this.props.onSave(this.state.newQues);
  //     this.setState({ 
  // id: Date.now().toString(), // You can use a unique identifier for the id

  // ques: this.state.newQues });
  //     //  console.log(this.state.finalValue)
  //   };
  submitHandler = () => {
    const { newQues } = this.state;
    if (newQues.trim() !== '') {
      this.props.onSave({
        id: Date.now().toString(), // You can use a unique identifier for the id
        ques: newQues,
      });
      this.setState({ newQues: "" });
    }
  };
  render() {
   

    return (
      <div className="newQues">
        <input
          type="text"
          placeholder="Ask your quesries here."
          onChange={this.clickHandler}
          value={this.state.newQues}
        />

        <span onClick={this.submitHandler}>
          <i className="fa-solid fa-plus fa-xl"></i>
          {/* <i class="fa-solid fa-plus fa-fade fa-xl"></i> */}
        </span>
      </div>
    );
  }
}

export default NewQuestion;


// import React, { Component } from 'react';
// import './NewQuestion.css';

// class NewQuestion extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       newQues: "",
//     };
//   }

//   clickHandler = (event) => {
//     this.setState({ newQues: event.target.value });
//   };

//   submitHandler = () => {
//     this.props.onAddQuestion({
//       id: Date.now().toString(), // You can use a unique identifier for the id
//       ques: this.state.newQues,
//     });
//     this.setState({ newQues: "" });
//   };

//   render() {
//     return (
//       <div className="newQues">
//         <input
//           type="text"
//           placeholder="Ask your queries here."
//           onChange={this.clickHandler}
//           value={this.state.newQues}
//         />
//         <span onClick={this.submitHandler}>
//           <i className="fa-solid fa-plus fa-xl"></i>
//         </span>
//       </div>
//     );
//   }
// }

// export default NewQuestion;
