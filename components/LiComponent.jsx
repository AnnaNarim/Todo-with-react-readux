import React from 'react';
import { connect } from 'react-redux';
import {deleteAction, changeToEditAction} from '../actions/actions.js';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import StarIcon from '@material-ui/icons/Star';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText'

class LiComponent extends React.Component {
  render() {
    return(
      <ListItem>
      <ListItemIcon>
          <StarIcon />
        </ListItemIcon>
        <ListItemText> {this.props.item} </ListItemText>
        <Button variant="fab" color="primary" aria-label="edit" onClick={() => this.props.changeToEdit_d(this.props.item ,this.props.index)}>
          <EditIcon />
        </Button>
        <Button onClick={() => this.props.delete_d(this.props.index)}>
          <DeleteIcon />
          Delete
        </Button>
      </ListItem>
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
