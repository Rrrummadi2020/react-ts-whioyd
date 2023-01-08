import * as React from 'react';
import ChildrenC from './components/ChildrenC';
import Forms from './components/Forms';
import ParentC from './components/ParentC';
import './style.css';
import Welcome from './components/Welcome';
import ClassComp from './components/ClassComp';
import ConditionalR from './components/ConditionalR';
import Listing from './components/Listing';
import Styless from './components/Styless';
import ExternalC from './components/ExternalC';

export default function App() {
  return (
    <div>
      {/* 
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <Welcome name="Rama"></Welcome>
      <ClassComp name="reny"></ClassComp>
      <ClassComp name="reny"><h6>Bengaluru childers</h6></ClassComp>
      <ParentC></ParentC>
       <ConditionalR />
       <Styless />
       <Listing />
      <ExternalC />
       */}
      <Forms />
    </div>
  );
}
