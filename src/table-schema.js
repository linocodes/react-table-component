import StyleSheet from 'react-style';
import { IDCell } from './components/IDCell';
import { TextCell } from './components/TextCell';
import { CheckBoxCell } from './components/CheckBoxCell';

let styles = StyleSheet.create({

  id: {
    flex: .2,
    marginRight: 5
  },
  text: {
    flex: 1.5,
    marginRight: 10
  },
  checkbox: {
    flex: 1.5
  }
  
});

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



