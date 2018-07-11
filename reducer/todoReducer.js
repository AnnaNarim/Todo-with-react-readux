const initialState = {
  value: '',
  index: -1,
  is_add: true,
  type: ''
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return Object.assign({}, state, action.payload);
    case "EDIT_ITEM":
      return Object.assign({}, state, action.payload);
    case "DELETE_ITEM":
      return Object.assign({}, state, action.payload);
    case "CHANGE_TO_EDIT":
      return Object.assign({}, state, action.payload);
    default:
      return state
  }
}
