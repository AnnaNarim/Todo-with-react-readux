import React from 'react'

class UlTodos extends React.Component {
  constructor(props){
    super();
  }
  render(){
    return <ul> {this.props.children} </ul>;
  }
}

export default UlTodos;
