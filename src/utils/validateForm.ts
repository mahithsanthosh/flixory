type FormFields = {
  email: HTMLInputElement;
  password: HTMLInputElement;
};

const validateForm = ({ email, password }: FormFields) => {

  if (!email)
    return "Email is required.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value))
    return "Invalid email format.";

  if (!password)
    return "Password is required.";
  if (password.value.length < 6)
    return "Password must be at least 6 characters long.";

  return null
};

export default validateForm;
