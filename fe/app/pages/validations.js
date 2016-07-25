import { getValidator } from 'utils/validation';
import { required, email, phone, match, password, maxLength } from 'utils/validations';

export const login = getValidator(() => ({
  email: [required, email],
  password: [required, password]
}));

export const requestAccount = getValidator(() => ({
  firstname: [required],
  lastname: [required],
  password: [required, password],
  username: [required, email],
}));
