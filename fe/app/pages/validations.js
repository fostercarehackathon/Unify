import { getValidator } from 'utils/validation';
import { required, email, phone, match, password, maxLength } from 'utils/validations';

export const login = getValidator(() => ({
  email: [required, email],
  password: [required, password]
}));

export const requestAccount = getValidator(() => ({
  firstName: [required],
  lastName: [required],
  email: [required, email],
  phone: [required, phone],
  type: [required]
}));
