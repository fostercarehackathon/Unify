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
  company: [required]
}));

export const newPassword = getValidator(() => ({
  password: [required, password],
  confirmPassword: [required, match('password', 'Password didn\'t match')]
}));

export const forgotPassword = getValidator(() => ({
  email: [required, email]
}));

export const troubleshoot = getValidator(() => ({
  firstName: [required],
  lastName: [required],
  email: [required, email],
  subject: [required],
  message: [required, maxLength(1000)]
}));
