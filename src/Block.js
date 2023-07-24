// import React, { Component } from 'react'
// import './Block.css'

// class Block extends Component {
//   render() {
//     const {quest} = this.props;
    
//     return (
//       <div className='quesBlock'>
//      <h3>{quest}</h3>
      
//       </div>
//     )
//   }
// }

// export default Block

import React, { Component } from 'react';
import './Block.css';

class Block extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }

  toggleExpanded = () => {
    this.setState((prevState) => ({
      expanded: !prevState.expanded,
    }));
  };

  render() {
    const { quest } = this.props;
    const { expanded } = this.state;

    return (
      <div className='quesBlock'>
        <h3 onClick={this.toggleExpanded}>{quest}</h3>
        {expanded && (
          <div className="answer">
          <br/>
            <p>{this.props.answer}</p>
          </div>
        )}
      </div>
    );
  }
}

export default Block;
