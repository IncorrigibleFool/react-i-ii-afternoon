import React, {Component} from 'react'

export default class Footer extends Component{
    render(){
        return(
        <footer>
        <div id = 'previous-button' onClick = {this.props.minus}>&lt; Previous</div>
        <div className = 'buttons edit' onClick = {this.props.editEntry}>Edit</div>
        <div className = 'buttons edit' onClick = {this.props.delete}>Delete</div>
        <div className = 'buttons edit' onClick = {this.props.newEntry}>New</div>
        <div id = 'next-button' onClick={this.props.plus}>Next &gt;</div>
        </footer>
    )
  }
}