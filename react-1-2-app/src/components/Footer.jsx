import React, {Component} from 'react'

export default class Footer extends Component{
    render(){
        return(
        <footer>
        <button onClick = {this.props.minus}>Previous</button>
        <button onClick={this.props.plus}>Next</button>
        </footer>
    )
  }
}