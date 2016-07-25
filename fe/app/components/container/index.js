import React, { PropTypes } from 'react';
import cx from 'classnames';

import './index.scss';

const Container = ({ className, children, ...otherProps }) => {
  const classes = cx('Container', className);

  return (
    <div {...otherProps}
      className={classes}
    >
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

export default Container;
