// deps
import React, { PropTypes, Component } from 'react';

// components
import Icon from 'components/icon';

// style
import './user-bar.scss';

// component
export default class UserBar extends Component {
  static propTypes = {
    username: PropTypes.string.isRequired
  };

  render() {
    const { username } = this.props;

    return (
      <div className="UserBar">
        <div className="app-wrapper">
          <div className="app-logo"></div>
          <div className="UserBar-Message">
            <Icon name="envelope" />
            <span>Hello, {username}</span>
          </div>
        </div>
      </div>
    );
  }
}
