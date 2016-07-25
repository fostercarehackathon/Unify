// deps
import React, { PropTypes, Component } from 'react';
import cx from 'classnames';

// components
import Icon from 'components/icon';

// style
import './request-status.scss';

// request status types
const REQUEST_TYPES = {
  success: {
    message: 'Message succesfully sent',
    iconName: 'checkmark'
  },

  error: {
    message: 'There has been an error',
    iconName: 'exclamation'
  }
};

// component
export default class RequestStatus extends Component {
  static propTypes = {
    status: PropTypes.oneOf(['success', 'error'])
  };

  static defaultProps = {
    status: null
  };

  getStatus(status) {
    // check for valid request type
    if (!REQUEST_TYPES[status]) { return null; }

    const requestMessage = REQUEST_TYPES[status].message;
    const requestIcon = REQUEST_TYPES[status].iconName;

    // css classes
    const classNames = cx({
      'RequestStatus': true,
      'RequestStatus--success': (status === 'success'),
      'RequestStatus--error': (status === 'error')
    });

    return (
      <div className={classNames}>
        <Icon name={requestIcon} />
        <span>{requestMessage}</span>
      </div>
    );
  }

  render() {
    const { status } = this.props;
    const requestStatus = this.getStatus(status);

    return requestStatus;
  }
}
