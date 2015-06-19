import React from 'react';
import StyleSheet from 'react-style';

export class Table extends React.Component {

  constructor(){

    super();

    this.renderRow = this.renderRow.bind(this);
    this.renderCell = this.renderCell.bind(this);
  }

  render(){

    let rows = 0;

    return (
      <div style={styles.table}>
        <Header schema={this.props.schema} />

        {/* RENDER ROWS  */}

        {
          this.props.data.map( (json) => {
            return this.renderRow(json, rows++);
          })
        }

      </div>
    );
  }

  renderRow(json, rowID){
    return (
      <div key={rowID} className={'row'} style={styles.flexRow}>
      {
        Object.keys(json).map((key)=>{
          return this.renderCell(key, json);
        })
      }
      </div>
    );
  }

  renderCell(key, json){
    let Component = this.props.schema[key].component;
    let data = json[key];
    let style = this.props.schema[key].style;

    return (
      <Component key={key} cell={key} data={data} style={style} />
    );
  }
};

/* Table Class Statics */

Table.propTypes = {
  data:  React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  schema: React.PropTypes.object.isRequired
};

/**-------------------**/

class Header extends React.Component {

  render(){

    let schema = this.props.schema;

    return (
      <div className={'table-header'} style={styles.header}>
      {
        Object.keys(schema).map((key) => {
          return (
            <h4 key={key} style={schema[key].style}>
            {schema[key].header}
            </h4>
          );
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
  }
});
