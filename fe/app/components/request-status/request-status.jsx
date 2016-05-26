// deps
import React, { PropTypes, Component } from 'react';

// style
import './request-status.scss';

// component
export default class RequestStatus extends Component {
  static propTypes = {
    status: PropTypes.string
  };

  static defaultProps = {
    status: ''
  };

  render() {
    const { status } = this.props;

    console.log('request type @ ', status);

    return (
      <div className="RequestStatus">
        message sent ok! status @ {status}
      </div>
    );
  }
}
