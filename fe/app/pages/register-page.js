import React, {Component, PropTypes} from 'react';

import { browserHistory, Link } from 'react-router';
import { reduxForm } from 'redux-form';

import { requestAccount as requestAccountValidation } from './validations';
import InputField from 'components/inputfield';
import { Grid, GridCell } from 'components/grid';

const fields = ['firstName', 'lastName', 'email', 'phone', 'type'];

@reduxForm({
  form: 'requestAccount',
  fields,
  validate: requestAccountValidation
})
class RegisterPage extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    fields: PropTypes.object,
    error: PropTypes.string,
    handleSubmit: PropTypes.func.isRequired
  };

  constructor(...args) {
    super(...args);

    this.onRequestAccountSubmit = this.onRequestAccountSubmit.bind(this);
  }

  onRequestAccountSubmit(data) {
    return this.props.actions.registerAccount(data)
      .then(() => {
        browserHistory.push('/request-account/pending');
      })
      .catch(({ reason: err }) => {
        if (err.status === 401) {
          return Promise.reject({ _error: 'An account with this email was already requested.' });
        }

        return Promise.reject();
      });
  }

  render() {
    const {
      handleSubmit, fields: {
      firstName,
      lastName,
      email,
      phone,
      type
    }, error
    } = this.props;

    return (
      <div className="RequestAccountPage">
        <h1><Link to="/login"/>Request Account</h1>
        {error && <div className="AccountLayout-formError">{error}</div>}
        <form onSubmit={handleSubmit(this.onRequestAccountSubmit)}>
          <InputField
            {...firstName}
          />

          <input
            {...lastName}
          />

          <input
            {...email}
            type="email"
          />

          <input
            {...phone}
          />

          <input
            {...type}
          />
          <Grid align="right" className="AccountLayout-formActions">
            <GridCell fit>
              <button type="submit">Submit</button>
            </GridCell>
          </Grid>
        </form>
      </div>
    );
  }
}

export default RegisterPage;