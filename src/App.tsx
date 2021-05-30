import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Heading } from './components/Heading';

function App(): React.ReactElement {
  return (
    <div className="App">
      {/* // Written as a function expression */}
      <Header name={"Subham Singh"} color={"blue"} />

      {/* // Writing as a function declaration */}
      <Heading name={"Subham Singh"} color={"Red"} />
    </div>
  );
}

export default App;
