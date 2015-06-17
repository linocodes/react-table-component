import React from 'react';
import { Table } from './components/Table';
import { schema } from './table-schema';

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      dataSource: [],
      loading: true
    };
  }

  componentWillMount(){
    fetch('http://jsonplaceholder.typicode.com/todos')
      .then((response) => {return response.json() })
      .then( (json) => {
        this.setState({
          dataSource: json,
          loading: false
        })
      });
  }

  render(){
    if (this.state.loading) {
      return (<p>loading</p>);
    }

    return (
      <Table data={this.state.dataSource} schema={schema} />
    );
  }

}

React.render(
  <App />,
  document.getElementById('app')
);
