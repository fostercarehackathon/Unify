import React, { PropTypes } from 'react';
import cx from 'classnames';
import { capitalize } from 'lodash';

import './grid.scss';

const Grid = (props) => {
  const {
    className,
    align,
    fit,
    equalHeight,
    withGutter,
    children,
    ...otherProps } = props;

  const gridClasses = cx('Grid', {
    [`Grid--align${capitalize(align)}`]: align,
    'Grid--fit': fit,
    'Grid--equalHeight': equalHeight,
    'Grid--withGutter': withGutter
  }, className);


  return (
    <div {...otherProps} className={gridClasses}>
      {children}
    </div>
  );
};

Grid.propTypes = {
  align: PropTypes.oneOf(['center', 'right', 'middle', 'bottom']),
  fit: PropTypes.bool,
  equalHeight: PropTypes.bool,
  withGutter: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default Grid;
