import React, { Component } from 'react';
export class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'rama ra',
      comments: '',
      topic: 'react',
    };
  }
  userNameCHange = (event) => {
    this.setState({ username: event.target.value });
  };
  submitForm = (event) => {
    console.log(this.state.username + ' ' + this.state.topic);
  };
  topicChange = (event) => {
    this.setState({ topic: event.target.value });
  };
  render() {
    return (
      <div>
        {this.state.username}
        <h1>Forms Introduction </h1>
        <form onSubmit={this.submitForm}>
          <div>
            <label> username</label>
            <input
              type="text"
              value={this.state.username}
              onChange={this.userNameCHange}
            />
          </div>
          <div>
            <label>select </label>
            <select
              name=""
              value={this.state.topic}
              onChange={this.topicChange}
            >
              <option value="react">React</option>
              <option value="view">View</option>
              <option value="angular">Angular</option>
            </select>
          </div>
          <button type={this.onSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}
export default Forms;
