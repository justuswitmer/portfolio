const dimensionsReducer = (state = [], action) => {
  switch (action.type) {
    case 'UPDATE_DIMENSIONS':
      return action.payload
    default:
      return state;
  }
};

export default dimensionsReducer;