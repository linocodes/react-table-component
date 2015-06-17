# simple-react-table

A simple React Table component.

## Table

The Table component receives data and a schema, and renders a table accordingly.

The source code is located in `src/components/Table.jsx`.

### Props

> #### data
>> A collection of json objects

> #### schema
>> An object that describes the structure, styling, and rendering of the table

### schema

A key value pair in the schema object represents how a column of the table will be rendered.

An example schema object:

```javascript

export const schema = {

  userId: {
    style: styles.id,
    header: 'User ID',
    component: IDCell
  },
  id: {
    style: styles.id,
    header: 'Todo ID',
    component: IDCell
  },
  title: {
    style: styles.text,
    header: 'Note',
    component: TextCell
  },
  completed: {
    style: styles.checkbox,
    header: 'Completed',
    component: CheckBoxCell
  }

};

```

Each key must match a key in the json data object in the `data` prop.

Each value of this key must be an object with these properties:
* header - a string that represents the column header text
* component - a React component that renders a cell in the column
* style - an object that describes the styling of the component

#### Build Tools
* Gulp + Webpack + Babel
