import React, {Component} from 'react'

export default class Main extends Component{
    render(){
        return(
            <main>
                <div className = 'main-box'>
                    <h1 id = 'counter'>{this.props.index + 1}/{this.props.data.length}</h1>
                    <h1 id = 'name'>{this.props.data[this.props.index].name.first} {this.props.data[this.props.index].name.last}</h1>
                    <span>
                        <p><span className= 'bold'>From: </span>{this.props.data[this.props.index].city}, {this.props.data[this.props.index].country}</p>
                        <p><span className= 'bold'>Job Title: </span>{this.props.data[this.props.index].title}</p>
                        <p><span className= 'bold'>Employer: </span>{this.props.data[this.props.index].employer}</p>
                    </span>
                    <h4 id = 'favorites'>Favorite Movies:</h4>
                    <span className = 'movie-list'>
                        <p className = 'movie-list'>1: {this.props.data[this.props.index].favoriteMovies[0]}</p>
                        <p className = 'movie-list'>2: {this.props.data[this.props.index].favoriteMovies[1]}</p>
                        <p className = 'movie-list'>3: {this.props.data[this.props.index].favoriteMovies[2]}</p>
                    </span>
                </div>
            </main>
        )
    }
}