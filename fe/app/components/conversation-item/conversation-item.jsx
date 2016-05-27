// deps
import React, { Component, PropTypes } from 'react';
// import cx from 'classnames';
// import moment from 'moment';

// styles
import './conversation-item.scss';

export default class ConversationItem extends Component {
  static propTypes = {
    message: PropTypes.object
  };

  // status
  // from
  // respond in
  // message body
  // date sent

  render() {
    return (
      <div className="ConversationItem">
        conversation here
      </div>
    );
  }
}
