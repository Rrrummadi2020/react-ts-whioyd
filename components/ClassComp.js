import React, { Component } from 'react';

class ClassComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Welcome Rama rangeswara reddy',
      count: 0,
    };
    this.changeMessage = this.changeMessage.bind(this);
  }
  changeMessage() {
    // this.setState({
    //   message: 'Thanks for subscribing',
    //   count: this.state.count + 1,
    // });
    this.setState(
      (prevState) => ({ count: prevState.count + 1 }),
      () => {
        console.log(this.state.count);
      }
    );
  }
  render() {
    let { children, name } = this.props;
    return (
      <div>
        <h1>Welcome to class compoonet {this.props.name}</h1>
        <applet>{children}</applet>
        <button>ui me</button>
        <applet>{this.state.message}</applet>
        <br />
        <applet>{this.state.count}</applet>
        <button onClick={this.changeMessage}>Click Me</button>
      </div>
    );
  }
}
export default ClassComp;
