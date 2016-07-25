// deps
import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import shallowCompare from 'react-addons-shallow-compare';
import { isString } from 'lodash';

// style
import './button.scss';

export default class Button extends Component {
  static propTypes = {
    type: PropTypes.oneOf(['main', 'transparent', 'link']),
    buttonType: PropTypes.string,
    disabled: PropTypes.bool,

    onClick: PropTypes.func,
    children: React.PropTypes.node,
    className: React.PropTypes.string
  }

  static defaultProps = {
    buttonType: 'button',
    type: 'main'
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  renderChildren(children) {
    // default text for button
    return children === undefined || (isString(children) && children.trim() === '')
      ? 'Button'
      : children;
  }

  render() {
    const { type, disabled, className, buttonType, ...otherProps } = this.props;

    // button classes for types and modifiers
    const buttonClasses = cx('Button', {
      [`Button--${type}`]: type,
      // [`Button--${size}`]: size,
      'Button--disabled': disabled
    }, className);

    // change onClick if button is disabled
    if (disabled) {
      delete otherProps.onClick;
    }

    return (
      <button {...otherProps} className={buttonClasses} type={buttonType}>
        {this.renderChildren(this.props.children)}
      </button>
    );
  }
}
