import React, { Component } from 'react';
import Navigation from './Components/Navigation/Navigation';
import './App.css';
import 'tachyons';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
      {/*  <Logo />
        <Rank />
        <ImageLinkForm />        
        <FaceRecognition /> */}
      </div>
    );
  }
}

export default App;
