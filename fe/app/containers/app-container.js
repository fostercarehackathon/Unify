// deps
import React, { Component, PropTypes } from 'react';

// components
import HeaderContainer from 'containers/header-container';

export default class AppContainer extends Component {
  static propTypes = {
    children: PropTypes.node
  };

  render() {
    return (
      <div>
        <HeaderContainer />
        { this.props.children }
      </div>
    );
  }
}
