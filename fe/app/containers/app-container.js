// deps
import React, { Component, PropTypes } from 'react';

// components
import Icons from 'components/icons';
// import PageLoader from 'components/atoms/PageLoader';

export default class AppContainer extends Component {
  static propTypes = {
    children: PropTypes.node
  };

  render() {
    return (
      <div>
        <Icons />
        { this.props.children }
      </div>
    );
  }
}
