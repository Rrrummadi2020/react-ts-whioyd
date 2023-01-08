import React from 'react';

// export default function greet(props) {
//   return <div>Welcome {props.name} </div>;
// }

  //const greet = (props)=><h1>Sai {props.name}</h1>

  export default function greet(props) {
    //return <div>Welcome {props.name} </div>;
    return React.createElement('div',null,'Hello JSX welcome');
  }
  export default greet;