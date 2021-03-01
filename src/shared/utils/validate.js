export const validate = (value) => {
  if (value.length === 0) return 'Input is required';

  if (/[`!@#$%^&*()_+\-=\]{};':"\\|,.<>?~]/.test(value)) return 'Input is invalid';

  return '';
};
