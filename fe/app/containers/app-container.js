// deps
import React, { Component, PropTypes } from 'react';

// components
import Icons from 'components/icons';
import HeaderContainer from 'containers/header-container';

export default class AppContainer extends Component {
  static propTypes = {
    children: PropTypes.node
  };

  render() {
    return (
      <div>
        <Icons />
        <HeaderContainer />
        { this.props.children }
      </div>
    );
  }
}
