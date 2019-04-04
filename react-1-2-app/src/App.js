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
      index: 0,
      lastId: 25
    }
  }

  plusIndex = () => {
    if(this.state.index < this.state.arr.length - 1){
    this.setState({index: this.state.index + 1})
    }
  }

  minusIndex = () => {
    if(this.state.index > 0){
      this.setState({index: this.state.index - 1})
    }
  }

  delete = () => {
    data.splice(this.state.index, 1)
    this.setState({arr: data})
  }

  newEntry = () => {
    var idPlus1 = this.state.lastId + 1
    this.setState({lastId: idPlus1})
    var first = window.prompt('First name?')
    var last = window.prompt('Last name?')
    var city = window.prompt('City?')
    var country = window.prompt('Country?')
    var employer = window.prompt('Employer name?')
    var title = window.prompt('Professional title?')
    var movie1 = window.prompt('Favorite movie?')
    var movie2 = window.prompt('Second favorite movie?')
    var movie3 = window.prompt('Thrid favorite movie?')

    var newData = {
      id: idPlus1,
      name: {first: first, last: last},
      city: city,
      country: country,
      employer: employer,
      title: title,
      favoriteMovies: [movie1, movie2, movie3]
    }

    data.push(newData)
    this.setState({arr: data})
    var newIndex = this.state.arr.length - 1
    this.setState({index: newIndex})
  }

  editEntry = () => {
    var first = window.prompt('First name?', data[this.state.index].name.first)
    var last = window.prompt('Last name?', data[this.state.index].name.last)
    var city = window.prompt('City?', data[this.state.index].city)
    var country = window.prompt('Country?', data[this.state.index].country)
    var employer = window.prompt('Employer name?', data[this.state.index].employer)
    var title = window.prompt('Professional title?', data[this.state.index].title)
    var movie1 = window.prompt('Favorite movie?', data[this.state.index].favoriteMovies[0])
    var movie2 = window.prompt('Second favorite movie?', data[this.state.index].favoriteMovies[1])
    var movie3 = window.prompt('Thrid favorite movie?', data[this.state.index].favoriteMovies[2])

    var updateData = {
      id: data[this.state.index].id,
      name: {first: first, last: last},
      city: city,
      country: country,
      employer: employer,
      title: title,
      favoriteMovies: [movie1, movie2, movie3]
    }

    console.log(updateData.id)

    data.splice(this.state.index, 1, updateData)
    this.setState({arr: data})
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
          delete = {this.delete}
          newEntry = {this.newEntry}
          editEntry = {this.editEntry}
        />
      </div>
    )
  }
}

export default App;
