import React, { Component } from 'react';
import { connect } from 'react-redux';

class PortfolioItem extends Component {

  state = {
    isHidden: true
  }

  toggleHidden = () => {
    console.log('toggleHidden was triggered');
    this.setState({
      isHidden: !this.state.isHidden
    });
  }

  render() {
    return (
      <a
        className='portfolio'
        href={this.props.project.href}>
        <span>{this.props.project.name}</span>
      </a>

    );
  }
}

export default connect()(PortfolioItem);

{/* <a
onMouseEnter={this.toggleHidden}
onMouseLeave={this.toggleHidden}
className='portfolio'
href={this.props.project.href}>
{
  this.state.isHidden ?
    <img src={this.props.project.path}
      alt={this.props.project.name} />
    :
    <span>{this.props.project.name}</span>
}
</a> */}