export const validateName = (name: string | undefined, errors: { [key: string]: string }) => {
  if (!name) {
    errors.name = 'Name is required';
  } else if (name.length < 3) {
    errors.name = 'Name must be at least 3 characters';
  } else {
    errors.name = '';
  }
};

export const validateEmail = (email: string, errors: { [key: string]: string }) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!email) {
    errors.email = 'Email is required';
  } else if (!emailRegex.test(email)) {
    errors.email = 'Email is invalid';
  } else {
    errors.email = '';
  }
};

export const validatePassword = (password: string, errors: { [key: string]: string }) => {
  const hasLetter = /[a-zA-Z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  if (!password) {
    errors.password = 'Password is required';
  } else if (password.length < 8) {
    errors.password = 'Password must be at least 8 characters';
  } else if (!hasLetter) {
    errors.password = 'Password must contain at least one letter';
  } else if (!hasNumber) {
    errors.password = 'Password must contain at least one number';
  } else if (!hasSpecialChar) {
    errors.password = 'Password must contain at least one special character';
  } else {
    errors.password = '';
  }
};
