const menuReducer = (state = [], action) => {
  console.log('in menuReducer', state, action);
  switch (action.type) {
    case 'CHANGE_MENU':
      return action.payload
    default:
      return state;
  }
};

export default menuReducer;