import React, { Component } from 'react';
import './App.css';
import data from './components/data.js'
import Header from './components/Header.jsx'
import Main from './components/Main.jsx'
import Footer from './components/Footer.jsx'

class App extends Component {
  constructor(){
    super()
    this.state = {
      arr: data,
      index: 0
    }
  }

  plusIndex = () => {
    if(this.state.index < 24){
    this.setState({index: this.state.index + 1})
    }
  }

  minusIndex = () => {
    if(this.state.index > 0){
      this.setState({index: this.state.index - 1})
    }
  }
  
  render() {
    return (
      <div>
        <Header/>
        <Main 
          data = {this.state.arr}
          index = {this.state.index}
          />
        <Footer 
          plus = {this.plusIndex}
          minus = {this.minusIndex}
        />
      </div>
    )
  }
}

export default App;
