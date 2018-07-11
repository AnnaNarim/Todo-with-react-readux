import React from 'react';
import AddComponent from './AddComponent.jsx'
import UlTodos from './UlTodos.jsx'
import LiComponent from './LiComponent.jsx'
import { connect } from 'react-redux';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			todos: ['asd', 'qefds', 'asdfgh', 'rfgsd'],
			value: '',
			isAdd: true,
			index: -1,
		}
		this.addItem = this.addItem.bind(this);
		this.deleteItem = this.deleteItem.bind(this);
		this.editItem = this.editItem.bind(this);
		this.edit = this.edit.bind(this);
		console.log('constructor')
	}
	/*componentWillMount() {
		console.log('willmount')
	}
	componentDidMount() {
		console.log('didmount')
	}*/
	componentWillReceiveProps(nextProps) {
		console.log('componentWillReceiveProps', nextProps)
		if(nextProps.todoReducer.type === 'ADD_ITEM'){
			this.addItem(nextProps.todoReducer.payload.value, nextProps.todoReducer.payload.is_add)
		}
		else if(nextProps.todoReducer.type === 'EDIT_ITEM') {
			this.editItem(nextProps.todoReducer.payload.value, nextProps.todoReducer.payload.is_add)
		}
		else if(nextProps.todoReducer.type === 'DELETE_ITEM'){
			this.deleteItem(nextProps.todoReducer.payload.index)
		}
		else if(nextProps.todoReducer.type === 'CHANGE_TO_EDIT'){
			this.edit(nextProps.todoReducer.payload.value, nextProps.todoReducer.payload.index)
		}
	}
	/*componentWillUnmount() {
		console.log('WIllunmount')
	}
	componentDidUnmount() {
		console.log('didunmount')
	}*/
	addItem(item, is_add) {
		const list = this.state.todos.slice(0);
		list.push(item);
		this.setState({ todos: list, isAdd: is_add});
	}
	deleteItem(index){
		const list = this.state.todos.slice(0);
    delete list[index];
    list.splice(index, 1);
    this.setState({ todos:list });
	}
	edit(value, index){
		this.setState({value: value, isAdd: false, index: index})
	}
	editItem(value, is_add){
		const index = this.state.index;
		const list = this.state.todos.slice(0);
		list[index] = value;
		this.setState({ todos: list, isAdd: is_add, value: ''});
	}
 	render() {
			const { todos, value, isAdd } = this.state
    	return (
				<div>
					<AddComponent todos={todos} value={value} isAdd={isAdd}/>
					<UlTodos todos={todos} >
						{todos.map((item, index) => {
							return <LiComponent key={index} item={item} index={index}/>
						})}
					</UlTodos>
				</div>
	    );
 	}
}
function mapStateToProps(state){
  return state;
}

export default connect(mapStateToProps)(App);
