import { Component } from 'react';

export class CheckBoxCell extends Component {

  render(){
    return (
      <div style={this.props.style}>
        <input type='checkbox' checked={this.props.data}/>
      </div>
    );
  }

}
