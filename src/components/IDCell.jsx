import React from 'react';

export class IDCell extends React.Component {

  render(){
    return (
      <div className={this.props.cell} style={this.props.style}>
        <p>{this.props.data}</p>
      </div>
    );
  }

}
