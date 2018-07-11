import React from 'react'
import { connect } from 'react-redux';
import { addItemAction, editItemAction } from './actions/actions.js'

class AddComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
			value: '',
      isAdd: true
		}
    this.inputChange = this.inputChange.bind(this)
    this.add = this.add.bind(this)
    this.edit = this.edit.bind(this)
  }
  componentWillReceiveProps(nextProps) {
    this.setState({value: nextProps.value, isAdd: nextProps.isAdd})
	}
  inputChange(event) {
		this.setState({value: event.target.value});
	}
  add(value){
    this.setState({value: '', isAdd: true});
    this.props.add_d(value, true);
  }
  edit(value){
    this.setState({value: '', isAdd: true});
    this.props.edit_d(value, true);
  }
  render() {
    return (
      <div>
        <input type='text' onChange={this.inputChange} value={this.state.value}  />
        <button onClick={ () => this.state.isAdd ?
                          this.add(this.state.value) : this.edit(this.state.value) }>
                          { this.state.isAdd ? 'Add' : 'Update' }
        </button>
      </div>
    );
  }
}
function mapDispatchToProps(dispatch){
  return {
    add_d: (value, bool) => dispatch(addItemAction(value, bool)),
    edit_d: (value, bool) => dispatch(editItemAction(value, bool))
  }
}
export default connect(null, mapDispatchToProps)(AddComponent);
