import React, { Component } from 'react';
import PortfolioItem from './PortfolioItem';
import { connect } from 'react-redux';
import todoList from './images/todoList.png';


class Portfolio extends Component {

  state = {
    projects: [
      {
        href: "g",
        name: "Lake Elmo Aero",
        path: '',
      },
      {
        href: "https://github.com/justuswitmer/prime-solo-project",
        name: "financeIt",
        path: '',
      },
      {
        href: "https://github.com/justuswitmer/weekend-movie-sagas",
        name: "Movie Library",
        path: '',
      },
      {
        href: "https://github.com/justuswitmer/witmer-redux-feedback-loop",
        name: "Feedback Survey",
        path: '',
      },
      {
        href: "https://github.com/justuswitmer/weekend-sql-to-do-list",
        name: "To Do List",
        path: { todoList },
      },
      {
        href: "https://github.com/justuswitmer/redux-pizza-parlor",
        name: "Pizza Parlor",
        path: '',
      },
    ],
  }

  project1 = () => {

  }


  render() {
    return (
      <>
        <h1>See my Work</h1>
        <div className='pageDiv'>

          <div className='portfolioItems'>
            {this.props.projects.map(project =>
              <PortfolioItem
                key={project.name}
                project={project}
              />
            )}
          </div>


        </div>
      </>
    );
  }
}

const mapStateToProps = reduxState => ({
  projects: reduxState.imageReducer
})

export default connect(mapStateToProps)(Portfolio);
