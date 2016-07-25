import React, {Component, PropTypes} from 'react';

import { browserHistory, Link } from 'react-router';
import { reduxForm } from 'redux-form';
import autobind from 'autobind-decorator';

import { requestAccount as requestAccountValidation } from './validations';
import InputField from 'components/inputfield';
import { Grid, GridCell } from 'components/grid';
import Select from 'react-select';
import Button from 'components/button';

import './register-page.scss';
const fields = ['firstname', 'lastname', 'password', 'username', 'type'];

var options = [
  { value: '0', label: 'Child' },
  { value: '1', label: 'Mentor' }
];

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

  componentDidMount() {
    this.props.fields.type.onChange('0');
  }

  @autobind
  onRequestAccountSubmit(data) {
    return this.props.actions.registerAccount(data)
      .then(() => {
        browserHistory.push('/');
      })
      .catch(({ reason: err }) => {
        if (err.status === 401) {
          return Promise.reject({ _error: 'An account with this email was already requested.' });
        }

        return Promise.reject();
      });
  }

  @autobind
  onTypeChanged(val) {
    this.props.fields.type.onChange(val.value);
  }

  render() {
    const {
      handleSubmit, fields: {
      firstname,
      lastname,
      password,
      username,
      type
    }, error
    } = this.props;

    console.log("THIS>PROSPDASSDAS", type.value);
    return (
      <div className="LoginPage RequestAccountPage">
        <div className="app-logo"></div>

        <h1><Link to="/login"/>Register Account</h1>
        {error && <div className="AccountLayout-formError">{error}</div>}
        <form onSubmit={handleSubmit(this.onRequestAccountSubmit)}>
          <InputField
            label="First name: "
            {...firstname}
          />

          <InputField
            label="Last name: "
            {...lastname}
          />

          <InputField
            label="Email: "
            {...username}
            type="email"
          />

          <InputField
            label="Password: "
            type="password"
            {...password}
          />

          <Select
            {...type}
            onBlur={null}
            value={type.value || '0'}
            onChange={this.onTypeChanged}
            options={options}
          />
          <Grid align="right" className="AccountLayout-formActions">
            <GridCell fit>
              <Button buttonType="submit">SUBMIT</Button>
            </GridCell>
          </Grid>
        </form>
      </div>
    );
  }
}

export default RegisterPage;
