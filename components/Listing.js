import React, { Component } from 'react';
class Listing extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let users = ['rama', 'chandra', 'koushik'];
    let usersHtml = users.map((e) => <h1>{e}</h1>);
    return <div>{usersHtml}</div>;
  }
}

export default Listing;
