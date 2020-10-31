import React, { Component } from 'react';

class Mode extends Component {
  render() {
    return (
      <div>
        <h1>Welcome! Would you prefer light mode or dark mode?</h1>
        <label>
          <input
            type='radio'
            name='mode'
            value='light'
            onClick={this.props.setMode}
          />Light Mode
        </label>
        <label>
          <input
            type='radio'
            name='mode'
            value='dark'
            onClick={this.props.setMode}
          />Dark Mode
        </label>
      </ div>
    );
  }
}

export default Mode;
