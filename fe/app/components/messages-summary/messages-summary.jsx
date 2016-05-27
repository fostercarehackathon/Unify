// deps
import React, { Component, PropTypes } from 'react';
import cx from 'classnames';

// styles
import './messages-summary.scss';

export default class MessagesSummary extends Component {
  static propTypes = {
    items: PropTypes.object.isRequired,
    activeItem: PropTypes.number,

    onItemClick: PropTypes.func
  };

  static defaultProps = {
    items: [],
    onItemClick: () => {}
  };

  getItems() {
    const { items } = this.props;

    if (!Object.keys(items)) { return null; }

    const summaryItems = Object.keys(items).map((item, index) => {
      const itemType = item;
      const itemCount = items[item];

      const itemClassName = cx('MessagesSummary-Item', {
        'MessagesSummary-lolozaur': true
      });

      return (
        <li key={'summary-' + index} className={itemClassName}>
          {itemType} <span className="MessagesSummary-Counter">{itemCount}</span>
        </li>
      );
    });

    return summaryItems;
  }

  getTotalItems() {
    const { items } = this.props;

    // get total items count
    const totalItems = Object.keys(items).map((item) => {
      return items[item];
    }).reduce((prev, current) => {
      return prev + current;
    });

    return totalItems;
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
