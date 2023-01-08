import React, { Component } from 'react';
export class ChildrenC extends Component {
  render() {
    return (
      <div>
        <h1>hERRR</h1>
        <button onClick={this.props.hf}>Click Me</button>
        <button onClick={() => this.props.hf('rama')}>With Param</button>
      </div>
    );
  }
}
export default ChildrenC;
