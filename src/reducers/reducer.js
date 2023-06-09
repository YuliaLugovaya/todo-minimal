export function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TASK': {
      const newTask = action.payload;
      return { ...state, list: [...state.list, newTask] }
    }
    case 'DELETE_TASK': {
      const deleteTask = action.payload;
      return { ...state, list: state.list.filter((el) => deleteTask !== el.id) }
    }
    case 'CHANGE_STATUS': {
      const changeStatus = action.payload;
      return {
        ...state, list: state.list.map((el) => {
          if (el.id === changeStatus) {
            el.status = !el.status;
          }
          return el;
        })
      }
    }
    case 'EDIT_TASK': {
      const { id, value } = action.payload;
      return {
        ...state, list: state.list.map((el) => {
          if (el.id === id) {
            return { ...el, text: value };
          }
          return el;
        })
      }
    }
    default: {
      return state;
    }
  }
}