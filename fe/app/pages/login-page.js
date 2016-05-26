import React, {Component, PropTypes} from 'react';

import {Link} from 'react-router';
import {reduxForm} from 'redux-form';

import InputField from 'components/inputfield';
import {login as loginValidation} from './validations';
import { handleLoginSuccess } from 'utils/auth';

import './login-page';
const fields = ['email', 'password'];

@reduxForm({
  form: 'login',
  fields,
  validate: loginValidation
})
class LoginPage extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired
  };

  constructor(...args) {
    super(...args);

    this.onLoginSubmit = this.onLoginSubmit.bind(this);
  }

  onLoginSubmit({email, password}) {
    console.log('this.props', this.props);
    return this.props.actions.login(email, password)
      .then(({value}) => {
        console.log('LOGIN SUCCES');
        handleLoginSuccess(value);
      })
      .catch(({reason: err}) => {
        if (err.status === 401) {
          return Promise.reject({_error: 'Invalid email or password'});
        }

        return Promise.reject();
      });
  }

  render() {

    const {handleSubmit, fields: {email, password}, error} = this.props;
    return (
      <div className="LoginPage">
        <div className="LoginPage-header">
          <h1>Login</h1>
          <Link to="/request-account"/>
        </div>
        {error && <div className="AccountLayout-formError">{error}</div>}
        <form onSubmit={handleSubmit(this.onLoginSubmit)}>
          <InputField
            label="Email: "
            {...email}
            type="email"
          />
          <InputField
            label="Password: "
            {...password}
            type="password"
          />
          <div className="AccountLayout-formActions">
            <div className="LoginPage-actions">
              <Link
                to="/forgot-password"
                className="LoginPage-forgotPassword"
              >
                Forgot password?
              </Link>
              <button primary label="Login" type="submit">Submit</button>
              <Link
                to="/register"
                className="LoginPage-register"
              >
                Register
              </Link>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginPage;