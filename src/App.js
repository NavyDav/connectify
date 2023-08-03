import {Component} from 'react';
import './App.css';
import NavBar from './components/Navbar.js';
import Header from './components/Header.js';

class App extends Component {
  render(){
    return (
      <div className="App">
        <NavBar/>
        <Header/>
      </div>
    )
  }
}

export default App;
