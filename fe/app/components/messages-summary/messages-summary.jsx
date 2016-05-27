// deps
import React, { Component, PropTypes } from 'react';
import cx from 'classnames';

// styles
import './messages-summary.scss';

export default class ConversationItem extends Component {
  static propTypes = {
  };

  render() {
    // const conversationItemClasses = cx('ConversationItem', {
    //   [`ConversationItem--${messageStatusIcon}`]: messageStatusIcon
    // });

    return (
      <div className="MessagesSummary">
        <div className="MessagesSummary-TotalMessages">
          Your messages <span className="MessagesSummary-Counter">26</span>
        </div>
        <ul>
          <li>All <span className="MessagesSummary-Counter">1</span></li>
          <li>Unread <span className="MessagesSummary-Counter">1</span></li>
          <li>Read <span className="MessagesSummary-Counter">24</span></li>
        </ul>
      </div>
    );
  }
}
