const project = [
  {
    title: 'Movie Library',
    link: 'https://github.com/justuswitmer/weekend-movie-sagas',
    image: 'images/Movie-Library.png',
    description: '',
  },
  {
    title: 'To Do List',
    link: 'https://github.com/justuswitmer/weekend-sql-to-do-list',
    image: 'images/To-Do-App.png',
    description: '',
  },
  {
    title: 'Feedback Survey',
    link: 'https://github.com/justuswitmer/witmer-redux-feedback-loop',
    image: 'images/Feedback-Loop.png',
    description: '',
  },
  {
    title: 'Pizza Parlor',
    link: 'https://github.com/justuswitmer/redux-pizza-parlor',
    image: 'images/Pizza-Parlor.png',
    description: '',
  },  
];

const projectReducer = (state = project, action) => {
  console.log('in projectReducer', action);
  switch (action.type) {
    case 'LOAD_PROJECT':
      return action.payload
    default:
      return state;
  }
};

export default projectReducer;