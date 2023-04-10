const validateName = (value) => value.length >= 2;

const validateEmail = (value) => {
  const re = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
  const result = re.test(value);
  return result;
};

export const validateForm = (...params) => [validateName, validateEmail].reduce((acc, func, index) => {
    const result = func(params[index]);
    return result;
  }, false);
