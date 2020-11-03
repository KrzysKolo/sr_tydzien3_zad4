import React, { Component } from 'react';
import './App.css';
import Cards from './components/Cards';
class App extends Component {
  state = {  }
  render() {
    return (
      <>
        <div className="app">
           <Cards />
        </div>
      </>
     );
  }
}

export default App;
