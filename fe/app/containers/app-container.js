import React, {Component, PropTypes} from 'react';
// import PageLoader from 'components/atoms/PageLoader';

export default class AppContainer extends Component {
  render() {
    return (
      <div>
        APP CONTAINER XXX
        {this.props.children}
      </div>
    );
  }
}
