import React from 'react';
import {Component} from 'react';
import './App.css';
import Routes from './routes'

class App extends Component {

  constructor(){
    super();
    this.state={
      appName: "GO Game",
      home:false
    }
  }

  render() {
    return (
      <div className="header">React-Go Game: g02
            <Routes name={this.state.appName}/>
      </div>

    );
  }
}
export default App;
