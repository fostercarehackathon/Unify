// deps
import React, { Component, PropTypes } from 'react';
import cx from 'classnames';

// styles
import './messages-summary.scss';

export default class MessagesSummary extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
      type: PropTypes.string,
      count: PropTypes.number
    })),

    onItemClick: PropTypes.func
  };

  static defaultProps = {
    items: [],
    onItemClick: () => {}
  };

  getItems() {
    const { items } = this.props;

    // map items
    const summaryItems = items.map((item, index) => {
      const itemClassName = cx('MessagesSummary-Item', {
        'MessagesSummary-lolozaur': true
      });

      return (
        <li key={'summary-' + index} className={itemClassName}>
          {item.type} <span className="MessagesSummary-Counter">{item.count}</span>
        </li>
      );
    });

    console.log('summary items@ ', summaryItems);

    return summaryItems;
  }

  getTotalItems() {
    return ~~(Math.random() * 100);
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
