import React, { Component } from 'react';

class Gif extends Component {
  handleClick = () => {
    if (this.props.clickedGif) {
      this.props.clickedGif(this.props.id);
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (nextProps.id !== this.props.id);
  }

  render() {
    const { id } = this.props;
    if (!id) {
      return null;
    }
    return (
      <img
        src={`https://media.giphy.com/media/${id}/giphy.gif`}
        alt="gif"
        className="gif"
        onClick={this.handleClick}
      />
    )}
}

export default Gif;
