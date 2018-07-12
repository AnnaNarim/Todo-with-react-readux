import React from 'react';
import List from '@material-ui/core/List';

class UlTodos extends React.Component {
  constructor(props){
    super();
  }
  render(){
    return <List> {this.props.children} </List>;
  }
}

export default UlTodos;
