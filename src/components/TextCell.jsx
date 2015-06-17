import { Component } from 'react';

export class TextCell extends Component {

  render(){
    return (
      <div style={this.props.style}>
        <p>{this.props.data}</p>
      </div>
    );
  }

}