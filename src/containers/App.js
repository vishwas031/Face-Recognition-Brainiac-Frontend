import React, {Component} from 'react';
import Navigation from '../components/Navigation/Navigation';
import Logo from '../components/Logo/Logo';
import ImageLinkForm from '../components/ImageLinkForm/ImageLinkForm';
import Rank from '../components/Rank/Rank';
import Particles from 'react-particles-js';
import 'tachyons';
import './App.css';

const myParticlesObj = {
  polygon: {
      enable: true,
      type: 'inside',
      move: {
          radius: 10
      }
  }
};
class App extends Component {
  render() {
    return (
      <div className="App">
        <Particles className= 'particles' 
          params={myParticlesObj} 
        />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm />
        {/* <FaceRecognition /> */}
      </div>
    );
  }  
}

export default App;
