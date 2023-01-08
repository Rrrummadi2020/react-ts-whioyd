import React, { Component } from 'react';
class ConditionalR extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }
  render() {
    let selData = this.state.isLoggedIn ? (
      <h1>Status present</h1>
    ) : (
      <h1>stateus not present</h1>
    );
    return <div>{selData}</div>;
  }
}

export default ConditionalR;
