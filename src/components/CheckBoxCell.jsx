import React from 'react';

export class CheckBoxCell extends React.Component {

  render(){
    return (
      <div className={this.props.cell} style={this.props.style}>
        <input type='checkbox' checked={this.props.data}/>
      </div>
    );
  }

}
