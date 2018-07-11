export const addItemAction = (value, bool) => (
 (dispatch) => dispatch({
 type: 'ADD_ITEM',
 payload: {
   value,
   is_add: bool,
   type: 'add',
 }
})
);

export const editItemAction = (value, bool) => (
  (dispatch) => dispatch({
    type: 'EDIT_ITEM',
    payload: {
      value,
      is_add: bool,
      type: 'edit'
    }
  })
);

export const deleteAction = (index) => (
  (dispatch) => dispatch({
    type: 'DELETE_ITEM',
    payload: {
      index,
      type: 'delete'
    }
  })
);

export const changeToEditAction = (value, index) => (
  (dispatch) => dispatch({
    type: 'CHANGE_TO_EDIT',
    payload: {
      value,
      index,
      type: 'changing_to_edit'
    }
  })
);
