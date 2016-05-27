// deps
import React, { Component, PropTypes } from 'react';
import cx from 'classnames';

// styles
import './messages-summary.scss';

const MESSAGE_TYPES = {
  all: 0,
  read: 1,
  unread: 2
};

export default class MessagesSummary extends Component {
  static propTypes = {
    items: PropTypes.object.isRequired,
    activeItem: PropTypes.string,

    onItemClick: PropTypes.func
  };

  static defaultProps = {
    items: {},
    activeItem: 0,
    onItemClick: () => {}
  };

  getItems() {
    const { items, activeItem, onItemClick } = this.props;

    if (!Object.keys(items)) { return null; }

    const summaryItems = Object.keys(items).map((item, index) => {
      const itemType = item;
      const itemCount = items[item];

      const itemIsActive = (MESSAGE_TYPES[activeItem] === index);
      const itemAction = itemIsActive ? null : onItemClick.bind(this, item);

      const itemClassName = cx('MessagesSummary-Item', {
        'MessagesSummary-Item--active': itemIsActive
      });

      return (
        <li
          key={'summary-' + index}
          className={itemClassName}
          onClick={itemAction}
        >
          {itemType} <span className="MessagesSummary-Counter">{itemCount}</span>
        </li>
      );
    });

    return summaryItems;
  }

  getTotalItems() {
    const { items } = this.props;
    return items.all;
  }

  render() {
    const summaryItems = this.getItems();
    const totalItems = this.getTotalItems();

    return (
      <div className="MessagesSummary">
        <div className="MessagesSummary-TotalMessages">
          Your messages <span className="MessagesSummary-Counter">{totalItems}</span>
        </div>
        <ul>
          {summaryItems}
        </ul>
      </div>
    );
  }
}
