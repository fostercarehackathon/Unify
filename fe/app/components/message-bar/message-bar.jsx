// deps
import React, {PropTypes, Component} from 'react';
import cx from 'classnames';
import autobind from 'autobind-decorator';

// components
import Button from 'components/button';
import Icon from 'components/icon';
import InputField from 'components/inputfield';
import ReactQuill from 'react-quill';
// style
import './message-bar.scss';

// component
export default class MessageBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      composing: false,
      subject: '',
      body: '',
    }
  }

  @autobind
  composeMessage() {
    this.setState({
      composing: !this.state.composing,
    });
  }

  @autobind
  sendMessage() {
    this.props.actions.saveMessage({
      subject: this.state.subject,
      body: this.state.body,
      to: 'ionut.radu@kalon.ro'
    })
  }

  @autobind
  onSubjectChanged(value) {
    this.setState({
      subject: value,
    });
  }

  @autobind
  onBodyChanged(value) {
    this.setState({
      body: value,
    });
  }

  renderComposerBody() {
    if (this.state.composing) {
      return (
        <div className="MessageBar-ComposerBlock">
          <div
            className="MessageBar-Title"
            type="transparent"
          >
            <Icon name="pencil"/>
            <span>Compose message...</span>
          </div>
          <InputField onChange={this.onSubjectChanged} className="MessageBar-Subject" label="Subject"/>
          <ReactQuill onChange={this.onBodyChanged} theme='snow' className="MessageBar-Body"/>
          <div className="MessageBar-Footer">
            <Button onClick={this.sendMessage}>Send</Button>
            <Button onClick={this.composeMessage} className="Button--transparent">Cancel</Button>
          </div>
        </div>
      )
    }
  }

  renderMessageBarHeader() {
    if (!this.state.composing) {
      return (
        <Button
          className="MessageBar-ComposeButton"
          type="transparent"
          onClick={this.composeMessage}
        >
          <Icon name="pencil"/>
          <span>Compose message...</span>
        </Button>
      )
    }
  }

  render() {
    const messageBarClasses = cx({
      'MessageBar': true,
      'MessageBar--active': this.state.composing,
    });

    return (
      <div className={messageBarClasses}>
        {this.renderMessageBarHeader()}
        {this.renderComposerBody()}
      </div>
    );
  }
}
