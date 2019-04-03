import React, {Component} from 'react'

export default class Main extends Component{
    render(){
        return(
            <main>
                <div className = 'main-box'>
                    <h1 id = 'counter'>{this.props.index + 1}/25</h1>
                    <h1 id = 'name'>{this.props.data[this.props.index].name.first} {this.props.data[this.props.index].name.last}</h1>
                    <h4>From: {this.props.data[this.props.index].city}, {this.props.data[this.props.index].country}</h4>
                    <h4>Job Title: <span>{this.props.data[this.props.index].title}</span></h4>
                    <h4>Employer: {this.props.data[this.props.index].employer}</h4>
                    <h4>Favorite Movies:</h4>
                    <p className = 'movie-list'>1: {this.props.data[this.props.index].favoriteMovies[0]}</p>
                    <p className = 'movie-list'>2: {this.props.data[this.props.index].favoriteMovies[1]}</p>
                    <p className = 'movie-list'>3: {this.props.data[this.props.index].favoriteMovies[2]}</p>

                </div>
            </main>
        )
    }
}