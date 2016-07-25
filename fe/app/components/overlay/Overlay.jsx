// deps
import React, { PropTypes } from 'react';
import autobind from 'autobind-decorator';
import cx from 'classnames';

// components
import Modal from 'react-modal';

// styles
import './overlay.scss';

class Overlay extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    isOpen: PropTypes.bool
  };

  constructor(...params) {
    super(...params);

    this.state = {
      isOutOfBound: false
    };
  }

  @autobind
  checkModalSize() {
    const windowHeight = window.innerHeight;
    const contentHeight = this.refs.ModalChildren.offsetHeight;

    if (windowHeight < contentHeight) {
      this.setState({
        isOutOfBound: true
      });
    }
  }

  render() {
    const { className, children, isOpen } = this.props;
    const { isOutOfBound } = this.state;

    return (
      <Modal
        isOpen={isOpen}
        className={
          cx({
            'OverlayContainer': true,
            'OverlayContainer--outOfBound': isOutOfBound
          })
        }
        overlayClassName={
          cx({
            Overlay: true
          }, className)
        }
        onAfterOpen={this.checkModalSize}
      >
        <div
          ref="ModalChildren"
          className="OverlayContentChildren"
        >
          {children}
        </div>
      </Modal>
    );
  }
}

export default Overlay;
