import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
// import Paper from 'material-ui/Paper';

import { Grid, GridCell } from 'components/grid';
import Container from 'components/container';
// import PageLoader from 'components/atoms/PageLoader';

import './index.scss';

export default class AccountLayout extends Component {
  static propTypes = {
    children: PropTypes.node
  };

  render() {
    return (
      <div className="AccountLayout">
        <div className="AccountLayout-main">
          <Container>
            <Grid align="center">
              <GridCell col={6}>
                <div className="AccountLayout-logo">
                  <img src={require('images/unify_logo.png')} />
                </div>
                  {this.props.children}
                <footer className="AccountLayout-footer">
                  <Link to="/troubleshoot">Do you have trouble using the platform?</Link>
                </footer>
              </GridCell>
            </Grid>
          </Container>
        </div>
      </div>
    );
  }
}
