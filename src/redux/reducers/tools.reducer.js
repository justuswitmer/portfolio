const toolkit = [
  { name: 'Languages', 
    items: ['HTML', 'CSS', 'Javascript'], 
    learning: ['Java', 'Dart'],
  },
  {
    name: 'Frameworks', 
    items: ['React', 'Reactstrap', 'Material UI', 'Bootstrap'], 
    learning: ['Flutter'],
  },
  {
    name: 'IDEs', 
    items: ['Microsoft Visual Studio'], 
    learning: ['IntelliJ'],
  },
  {
    name: 'Databases', 
    items: ['PostgreSQL'], 
    learning: ['Zoho'],
  },
  {
    name: 'Other Tools', 
    items: ['NPM', 'Redux', 'jQuery', 'Git', 'GitHub', 'Authorization', 'Authentication'], 
    learning: ['Webpack', 'Jest', 'Performace Metrics', 'Lighthouse'],
  },
];


const toolsReducer = (state = toolkit, action) => {
  switch (action.type) {
    case 'SET_TOOLKIT':
      return action.payload
    default:
      return state;
  }
};

export default toolsReducer;