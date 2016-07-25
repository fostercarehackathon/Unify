import { isInteger, toNumber, isArray } from 'lodash';
import moment from 'moment';

const isEmpty = value => value === undefined || value === null || value === '';
const join = (rules) =>
  (value, data) =>
    rules.map(rule => rule(value, data)).filter(error => !!error)[0/* first error */];

export function email(value) {
  return !isEmpty(value) && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined;
}

export function required(value) {
  return isEmpty(value)
    ? 'Required'
    : undefined;
}

export function isValidDate(value) {
  return !moment(value).isValid()
    ? 'Must be a date'
    : undefined;
}

export function minLength(min) {
  return value =>
    (!isEmpty(value) && value.length < min
      ? `Must be at least ${min} characters`
      : undefined);
}

export function maxLength(max) {
  return value =>
    (!isEmpty(value) && value.length > max
      ? `Must be no more than ${max} characters`
      : undefined);
}

export function minValue(min) {
  return value =>
    (!isEmpty(value) && value < min
      ? `Must be bigger than ${min}`
      : undefined);
}

export function maxValue(max) {
  return value =>
    (!isEmpty(value) && value > max
      ? `Must be smaller than ${max}`
      : undefined);
}

export function url(value) {
  return !isEmpty(value)
    && !/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi
      .test(value)
    ? 'Invalid url'
    : undefined;
}

/**
 * The method delete all HTML tags from the string and after that it checks the new string length
 * @param max
 * @returns {Function}
 */
export function maxLengthWithHTML(max) {
  return value => {
    if (!isEmpty(value)) {
      const trimmedValue = value.replace(/<[^>]*>/g, '');
      if (!isEmpty(trimmedValue) && trimmedValue.length > max) {
        return `Must be no more than ${max} characters`;
      }
    }

    return undefined;
  };
}

export function requiredWithHTML(value) {
  if (isEmpty(value)) {
    return 'Required';
  }

  if (!isEmpty(value)) {
    const trimmedValue = value.replace(/<[^>]*>/g, '');
    if (isEmpty(trimmedValue)) {
      return 'Required';
    }
  }

  return undefined;
}

export function jsonKeysRequired() {
  return value => {
    let errors = {};
    let hasErrors = false;

    Object.keys(value).forEach((key) => {
      if (isEmpty(value[key])) {
        errors = Object.assign({}, errors, { [key]: 'Required' });
        hasErrors = true;
      }
    });

    return hasErrors
      ? errors
      : undefined;
  };
}

export function integer(value) {
  return !isInteger(toNumber(value))
    ? 'Must be an integer'
    : undefined;
}

export function phone(value) {
  return /[a-zA-Z]/.test(value)
    ? 'Must be an number'
    : undefined;
}

export function number() {
  return value =>
    (!/^\d+$/.test(value)
      ? 'Must be a number'
      : undefined);
}

export function emails(emails_) {
  const emailReg = new RegExp('^(([^<>()[\\]\\\\.,;:\\s@"]+(\\.[^<>()[\\]\\\\.,;:\\s@"]+)*)|'
    + '(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|'
    + '(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$');
  const errors = {};

  if (isArray(emails_)) {
    emails_.forEach((email_, index) => {
      if (email_ && !emailReg.test(email_.trim())) {
        errors[index] = { error: 'Must enter a valid email' };
      }
    });
  } else {
    if (emails_ && !emailReg.test(emails_.trim())) {
      return 'Must enter a valid email';
    }
  }

  return Object.keys(errors).length
    ? errors
    : undefined;
}

export function requiredEmails(emails_) {
  const errors = {};

  if (!emails_) {
    return { error: 'Required email' };
  }

  if (isArray(emails_)) {
    emails_.forEach((email_, index) => {
      if (isEmpty(email_)) {
        errors[index] = { error: 'Required email' };
      }
    });
  } else {
    if (isEmpty(emails_)) {
      return 'Required email';
    }
  }

  return Object.keys(errors).length
    ? errors
    : undefined;
}

export function phones(phones_) {
  const phoneReg = /[a-zA-Z]/;
  const errors = {};

  if (isArray(phones_)) {
    phones_.forEach((phone_, index) => {
      if (!phone_ || phoneReg.test(phone_)) errors[index] = { error: 'Must enter a valid phone' };
    });
  } else {
    if (!phones_ || phoneReg.test(phones_)) {
      return 'Must enter a valid phone';
    }
  }

  return Object.keys(errors).length
    ? errors
    : undefined;
}

export function requiredPhones(phones_) {
  const errors = {};
  if (!phones_) {
    return { error: 'Required phone' };
  }

  if (isArray(phones_)) {
    phones_.forEach((phone_, index) => {
      if (isEmpty(phone_)) errors[index] = { error: 'Required phone' };
    });
  } else {
    if (isEmpty(phones_)) {
      return 'Required phone';
    }
  }

  return Object.keys(errors).length
    ? errors
    : undefined;
}

export function oneOf(enumeration) {
  return value =>
    (!enumeration.includes(value)
      ? `Must be one of: ${enumeration.join(', ')}`
      : undefined);
}

export function match(field, mismatchText) {
  return (value, data) =>
    (data && value !== data[field]
      ? (mismatchText || 'Do not match')
      : undefined);
}

export const password = minLength(4);

export function createValidator(rules) {
  return (data = {}) => {
    const errors = {};
    Object.keys(rules).forEach((key) => {
      // concat enables both functions and arrays of functions
      const rule = join([].concat(rules[key]));
      const error = rule(data[key], data);
      if (error) {
        errors[key] = error;
      }
    });
    return errors;
  };
}
