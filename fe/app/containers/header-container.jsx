// deps
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// components
import RequestStatus from 'components/request-status';
import UserBar from 'components/user-bar';
import MessageBar from 'components/message-bar';
import autobind from 'autobind-decorator';

import * as MessageActions from 'actions/message';
@connect(({users})=> users,(dispatch) => ({
  actions: bindActionCreators(MessageActions, dispatch)
}))
class HeaderContainer extends Component {
  constructor(props) {
    super(props);
    this.state= {
      status:''
    }
  }
  render() {
    return (
      <div>
        <RequestStatus status={this.state.status} />
        <UserBar username={` ${this.props.auth.session.firstname} ${this.props.auth.session.lastname}`} />
        <MessageBar {...this.props} onSuccess={this.onSuccess} onError={this.onError}/>
      </div>
    );
  }
  @autobind
  onSuccess() {
    this.setState({
      status: 'success'
    },()=> {
      setTimeout(()=> {
        this.setState({
          status: ''
        })
      },500)
    })
  }
  @autobind
  onError() {
    this.setState({
      status: 'error'
    },()=> {
      setTimeout(()=> {
        this.setState({
          status: ''
        })
      },500)
    })
  }
}

export default HeaderContainer;
