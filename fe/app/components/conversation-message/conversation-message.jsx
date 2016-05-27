// deps
import React, { Component, PropTypes } from 'react';
import autobind from 'autobind-decorator';
import moment from 'moment';
import cx from 'classnames';

import ReactQuill from 'react-quill';

import { Editor, EditorState } from 'draft-js';

// styles
import './conversation-message.scss';

class ConversationMessage extends Component {
  static propTypes = {
    message: PropTypes.object,
    onClick: PropTypes.func
  };

  constructor(...params) {
    super(...params);

    this.state = {
      editorState: EditorState.createEmpty()
    };
  }

  render() {
    const { message, onClick } = this.props;

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

        <div className="ConversationMessage-Editor">
          <ReactQuill value={editorState} />
        </div>
      </div>
    );
  }
}

export default ConversationMessage;
