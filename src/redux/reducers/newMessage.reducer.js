// sets updated transaction detail and saves it until it is called
export const newMessageReducer = (state = {}, action) => {
  console.log('in messageReducer', action);
  switch (action.type) {
    case 'UPDATE_MESSAGE':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default newMessageReducer;