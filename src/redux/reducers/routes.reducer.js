const routes = [
  { name: 'Home', route: '/', hasDivider: true },
  { name: 'Projects', route: '/project', hasDivider: true },
  { name: 'About', route: '/about', hasDivider: false },
];


const routesReducer = (state = routes, action) => {
  switch (action.type) {
    case 'SET_ROUTES':
      return action.payload
    default:
      return state;
  }
};

export default routesReducer;