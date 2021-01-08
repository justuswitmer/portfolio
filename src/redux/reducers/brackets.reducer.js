const bracketsReducer = (state = [], action) => {
  switch (action.type) {
    case 'UPDATE_HAS_BRACKETS':
      return action.payload
    default:
      return state;
  }
};

export default bracketsReducer;