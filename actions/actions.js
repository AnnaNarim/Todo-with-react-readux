export const addItemAction = (value, bool) => ({
  type: 'ADD_ITEM',
  payload: {
    value,
    is_add: bool,
    type: 'ADD_ITEM'
  }
});

export const editItemAction = (value, bool) => ({
  type: 'EDIT_ITEM',
  payload: {
    value,
    is_add: bool,
    type: 'EDIT_ITEM'
  }
});

export const deleteAction = (index) => ({
  type: 'DELETE_ITEM',
  payload: {
    index,
    type: 'DELETE_ITEM'
  }
});

export const changeToEditAction = (value, index) => ({
  type: 'CHANGE_TO_EDIT',
  payload: {
    value,
    index,
    type: 'CHANGE_TO_EDIT'
  }
})
