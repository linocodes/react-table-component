import React from 'react';

export class CheckBoxCell extends React.Component {

  constructor(props){
    super();
    this.state = {
      checked: props.data
    };
  }

  render(){
    return (
      <div className={this.props.cell} style={this.props.style}>
        <input 
          type='checkbox' 
          checked={this.state.checked} 
          onChange={this.handleChange.bind(this)} />
      </div>
    );
  }

  handleChange(){
    this.setState({
      checked: this.state.checked ? false : true
    });
  }

}
