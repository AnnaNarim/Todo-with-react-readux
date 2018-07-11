import React from 'react';
import { connect } from 'react-redux';
import {deleteAction, changeToEditAction} from './actions/actions.js';

class LiComponent extends React.Component {
  render() {
    return(
      <li>
        {this.props.item}
        <button onClick={() => this.props.changeToEdit_d(this.props.item ,this.props.index)}> Edit </button>
        <button onClick={() => this.props.delete_d(this.props.index)}> Delete </button>
      </li>
    );
  }
}

function mapDispatchToProps(dispatch){
  return {
    changeToEdit_d: (value, index) => dispatch(changeToEditAction(value, index)),
    delete_d: (index) => dispatch(deleteAction(index))
  }
}

export default connect(null, mapDispatchToProps)(LiComponent);
