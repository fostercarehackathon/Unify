import React, {Component, PropTypes} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class MessagesContainer extends Component {
  static propTypes = {
    children: PropTypes.element
  }

  render() {
    return (
      <div>
        Messages container
        {this.props.children}
      </div>
    );
  }
}

/*

<ReactCSSTransitionGroup
  component="div"
  transitionName="ConversationContainer"
  transitionEnterTimeout={350}
  transitionLeaveTimeout={350}
>
  {
    React.cloneElement(this.props.children, {
      key: this.props.location.pathname
    })
  }
</ReactCSSTransitionGroup>

*/
