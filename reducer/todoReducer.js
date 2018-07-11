const initialState = {};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return action;
    case "EDIT_ITEM":
      return action;
    case "DELETE_ITEM":
      return action;
    case "CHANGE_TO_EDIT":
      return action;
    default:
      return state
  }
}
