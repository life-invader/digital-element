const validateName = (value) => value.length >= 2;

const validateEmail = (value) => {
  const re = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
  const result = re.test(value);
  return result;
};

export const validateForm = (name, email, validateError) => {
  const nameResult = validateName(name);
  const emailResult = validateEmail(email);

  validateError.name = !nameResult;
  validateError.email = !emailResult;

  return nameResult && emailResult;
};
