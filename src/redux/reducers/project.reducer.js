const project = [
  {
    title: 'Movie Library',
    link: 'https://github.com/justuswitmer/weekend-movie-sagas',
    image: 'images/Movie-Library.png',
    description: 'A single place to store all your movies and find one when you want to watch something! Clicking on a movie will show details about it.',
  },
  {
    title: 'To Do List',
    link: 'https://github.com/justuswitmer/weekend-sql-to-do-list',
    image: 'images/To-Do-App.png',
    description: 'Get all of the items you need to do out of your head and on to a virtual to do list. Add a to do, categorize it, and then check it off once you comeplete it.',
  },
  {
    title: 'Feedback Survey',
    link: 'https://github.com/justuswitmer/witmer-redux-feedback-loop',
    image: 'images/Feedback-Loop.png',
    description: 'A simple feedback form that allows a user to indicate how well they are feeling, being supported, understanding material, and any other additional comments they might have. ',
  },
  {
    title: 'Pizza Parlor',
    link: 'https://github.com/justuswitmer/redux-pizza-parlor',
    image: 'images/Pizza-Parlor.png',
    description: 'An ordering system for pizza. The user can select which pizzas they would like, select the quantity, and then checkout. They can edit their items and track the order total through the entire process.',
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