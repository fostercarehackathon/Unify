// deps
import React, { PropTypes } from 'react';
import autobind from 'autobind-decorator';
import cx from 'classnames';

// components
import Modal from 'react-modal';

class Overlay extends React.Component {
  static propTypes = {
    isOpen: PropTypes.bool,
    children: PropTypes.node
  };

  constructor(...params) {
    super(...params);

    this.state = {
      isOutOfBound: false
    };
  }

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
    const { children, isOpen } = this.props;
    const { isOutOfBound } = this.state;
    const containsFooter = children[2];

    return (
      <Modal
        isOpen={isOpen}
        className={
          cx({
            'OverlayContainer': true,
            'OverlayContainer--withFooter': containsFooter,
            'OverlayContainer--outOfBound': isOutOfBound
          })
        }
        overlayClassName="Overlay"
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
