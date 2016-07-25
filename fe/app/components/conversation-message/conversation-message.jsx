// deps
import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import autobind from 'autobind-decorator';
import moment from 'moment';
import cx from 'classnames';

import Button from 'components/button';
import ReactQuill from 'react-quill';

import Radio from 'components/radio';


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

        <div className="ConversationMessage-Duration">
          <Radio
            checked={true}
            label="I will respond today"
            onChange={this._onChange}
          />
          <br />
          <Radio
            checked={this.state.checked}
            label={(<p>I will respond in <strong>4</strong> days</p>)}
            onChange={this._onChange}
          />
        </div>

        <Button
          className="ConversationMessage-Submit"
          type="link"
          onClick={
            sendMessage.bind(this, conversationId, editorState, to.username)
          }
        >
          Reply
        </Button>
      </div>
    );
  }
}

export default ConversationMessage;
