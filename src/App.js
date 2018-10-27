import React, { Component } from 'react';
import './App.css';
import Counter from './Counter';

class App extends Component {
  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          <h1>Licznik w JS</h1>
          </header>
        <Counter initValue={Date.now() } />
        <Counter initValue="20" />
        <Counter initValue="180" />

      </div>
    );
  }
}

export default App;
