import React, {Component} from 'react'

export default class Footer extends Component{
    render(){
        return(
        <footer>
        <button id = 'previous-button' onClick = {this.props.minus}>Previous</button>
        <button className = 'buttons' onClick = {this.props.editEntry}>Edit</button>
        <button className = 'buttons' onClick = {this.props.delete}>Delete</button>
        <button className = 'buttons' onClick = {this.props.newEntry}>New</button>
        <button id = 'next-button' onClick={this.props.plus}>Next</button>
        </footer>
    )
  }
}