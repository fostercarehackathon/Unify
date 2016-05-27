// deps
import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import autobind from 'autobind-decorator';
import moment from 'moment';
import cx from 'classnames';

import Button from 'components/button';
import ReactQuill from 'react-quill';



// styles
import './conversation-message.scss';

class ConversationMessage extends Component {
  static propTypes = {
    conversationId: PropTypes.number,
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

  @autobind
  onTextChange(val) {
    this.setState({
      editorState: val
    });
  }

  render() {
    const { message, onClick, sendMessage, conversationId } = this.props;

    const { editorState } = this.state;

    const { active, id, body, date, from, to } = message;

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
          <li className="CMD-Body" dangerouslySetInnerHTML={{ __html: body }} />
          <li className="CMD-ReceivedDate">
            {moment(date).startOf('hour').fromNow()} - {moment(date).format('HH:MM')}
          </li>
          <li className="CMD-BodyLarge" dangerouslySetInnerHTML={{ __html: body }} />
        </ul>

        <ReactQuill
          className="ConversationMessage-Editor"
          onChange={this.onTextChange}
          value={editorState}
          theme="snow"
        />

        <Button
          className="ConversationMessage-Submit"
          onClick={
            sendMessage.bind(this, conversationId, editorState, to.username)
          }
        >
          Send
        </Button>
      </div>
    );
  }
}

export default ConversationMessage;
