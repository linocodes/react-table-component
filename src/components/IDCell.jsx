import { Component } from 'react';

export class IDCell extends Component {

  render(){
    return (
      <div style={this.props.style}>
        <p>{this.props.data}</p>
      </div>
    );
  }

}
