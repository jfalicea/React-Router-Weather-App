import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import BootstrapNavBar from './BootstrapNavBar'
import Home from './Home'
import About from './About'
import Atlanta from './Atlanta'
import Images from './Images'

var atlImages = [
  'http://i.huffpost.com/gen/1716876/images/o-ATLANTA-TRAFFIC-facebook.jpg',
  'http://2.bp.blogspot.com/--XZFLg6LSq8/U4YV65sb2MI/AAAAAAAAO8A/cFl-Em5Zb0A/s1600/Sawfish_Atlanta_Aquarium.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/a/a3/Piedmont-park-urban-park.jpg'
]
// console.log(atlImages)

class App extends Component {
  render() {
    return (
      <Router> 
        <Route path="/" component={BootstrapNavBar} />
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/images" exact render={
          ()=>{return( <Images pics={atlImages}/>)}
        } />
        <Route path="/Atlanta" exact component={Atlanta} />
      </Router>
    );
  }
}

export default App;
