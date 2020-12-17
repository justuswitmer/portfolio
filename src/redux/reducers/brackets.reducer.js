const bracketsReducer = (state = [], action) => {
  console.log('in bracketsReducer', action);
  switch (action.type) {
    case 'UPDATE_HAS_BRACKETS':
      return action.payload
    default:
      return state;
  }
};

export default bracketsReducer;