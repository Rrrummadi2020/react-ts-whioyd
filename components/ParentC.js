import React, { Component } from 'react';
import ChildrenC from './ChildrenC';
export class ParentC extends Component {
  showMessage(name) {
    alert('am rama raneswaata ' + name);
  }
  render() {
    return (
      <div>
        <div>Hello parent</div>;<ChildrenC hf={this.showMessage}></ChildrenC>
      </div>
    );
  }
}
export default ParentC;
