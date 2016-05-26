// deps
import React, { PropTypes, Component } from 'react';
import cx from 'classnames';

// style
import './icon.scss';

// component
class Icon extends Component {
  static propTypes = {
    className: PropTypes.string,
    name: PropTypes.string
  };

  render() {
    const { name, className, ...otherProps } = this.props;
    const iconClass = cx('Icon', `Icon--${name}`, className);

    return (
      <svg {...otherProps} className={iconClass}>
        <use xlinkHref={`#icon-${name}`} />
      </svg>
    );
  }
}

export default Icon;
