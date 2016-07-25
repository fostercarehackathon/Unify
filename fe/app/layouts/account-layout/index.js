import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

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
                {this.props.children}
              </GridCell>
            </Grid>
          </Container>
        </div>
      </div>
    );
  }
}
