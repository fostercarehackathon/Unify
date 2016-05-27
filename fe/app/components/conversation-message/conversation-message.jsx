// deps
import React, { Component, PropTypes } from 'react';
import autobind from 'autobind-decorator';
import moment from 'moment';
import cx from 'classnames';

import Button from 'components/button';
import ReactQuill from 'react-quill';


// styles
import './conversation-message.scss';

class ConversationMessage extends Component {
  static propTypes = {
    message: PropTypes.object,
    onClick: PropTypes.func,
    sendMessage: PropTypes.func
  };

  constructor(...params) {
    super(...params);

    this.state = {
      editorState: ''
    };
  }

  render() {
    const { message, onClick, sendMessage } = this.props;

    const { editorState } = this.state;

    const { active, id, body, date, from } = message;

    return (
      <div className={
        cx({
          ConversationMessage: true,
          active
        })
      }
      >
        <ul className="ConversationMessage-Details" onClick={onClick.bind(this, id)}>
          <li className="CMD-From">{from.firstname} {from.lastname}</li>
          <li className="CMD-Body">{body}</li>
          <li className="CMD-ReceivedDate">
            {moment(date).startOf('hour').fromNow()} - {moment(date).format('HH:MM')}
          </li>
          <li className="CMD-BodyLarge">{body}</li>
        </ul>

        <ReactQuill className="ConversationMessage-Editor" value={editorState} theme="snow" />

        <Button className="ConversationMessage-Submit" onClick={sendMessage}>Send</Button>
      </div>
    );
  }
}

export default ConversationMessage;
