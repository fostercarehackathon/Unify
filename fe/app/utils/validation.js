import { createValidator } from './validations';

export function getValidator(config) {
  return (data) => {
    const validator = createValidator(config(data));
    return validator(data);
  };
}
