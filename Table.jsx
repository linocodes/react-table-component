
import React from 'react';
import StyleSheet from 'react-style';

class Table extends React.Component {
  
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
      <div style={styles.table}>
        <Header headers={Object.keys(this.state.dataSource[0])} />
        {
          this.state.dataSource.map((json)=>{
            return this.renderRow(json);
          })
        }
      </div>
    );
  }

  renderRow(json){
    return (
      <div style={styles.flexRow}>
      {
        Object.keys(json).map((key)=>{

          if (typeof json[key] === 'boolean'){
            return (
             <div style={styles[key]}>
              <input type='checkbox' checked={json[key]}/>
            </div>
            )
          }

          return ( 
            <div style={styles[key]}>
              <p>{json[key]}</p>
            </div>
          );
        })
      }
      </div>
    );
  }
};

class Header extends React.Component {

  render(){

    let headers = this.props.headers;
    let keys  = {
      userId: 'User ID',
      id: 'Todo ID',
      title: 'Note',
      completed: 'Completed'
    };

    return (
      <div style={styles.header}>
      {
        headers.map((header) => {
          return (<h4 style={styles[header]}>{keys[header]}</h4>)
        })
      }
      </div>
    );
  }

}

let styles = StyleSheet.create({
  table: {
    width: 'auto',
    margin: 50
  },
  flexRow: {
    display: 'flex', 
    flexDirection: 'row', 
    justifyContent: 'flex-start',
    alignItems: 'baseline'
  },
  header: {
    display: 'flex', 
    flexDirection: 'row', 
    justifyContent: 'flex-start'
  },
  flexStart: {
   display: 'flex', 
   justifyContent: 'flex-start',
  },
  userId: {
    flex: .2
  },
  id: {
    flex: .2,
    marginRight: 10
  },
  title: {
    flex: 1.5,
    marginRight: 10
  },
  completed: {
    flex: 1.5
  }
});

React.render(
  <Table />,
  document.getElementById('app')
);
