'use strict';

jest.dontMock('../src/components/Table.jsx');

import React from 'react/addons';
import { Table } from '../src/components/Table';
import { schema } from '../src/table-schema';

let TestUtils = React.addons.TestUtils;

describe('Table', () => {

  let data = [

    { 
      userId: 'Bob', 
      id: 10, 
      completed: false, 
      title: 'Bobe is hoping'
    },
    {
      userId: 'Bob', 
      id: 11, 
      completed: false, 
      title: 'Bobe is hoping'
    }

  ];

  let TableTest = TestUtils.renderIntoDocument(
    <Table schema={schema} data={data}/>
  );

  it('renders the number of rows equal to the number of data objects passed in', () => {
    let numRows = TestUtils.scryRenderedDOMComponentsWithClass(TableTest, 'row').length;
    expect(numRows).toEqual(2);
  });

  it('renders cells according to keys in the data objects', () => {

    let numUserIDCells = TestUtils.scryRenderedDOMComponentsWithClass(TableTest, 'userId').length;
    let numIDCells = TestUtils.scryRenderedDOMComponentsWithClass(TableTest, 'id').length;
    let numTitleCells = TestUtils.scryRenderedDOMComponentsWithClass(TableTest, 'title').length;

    expect(numUserIDCells).toEqual(2);
    expect(numIDCells).toEqual(2);
    expect(numTitleCells).toEqual(2);
  });

});