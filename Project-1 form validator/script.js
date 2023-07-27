//const emailRegex = new RegExp("^[w-\\.]+@([w-]+\\.)+[w-]{2,4}$g");
const form = document.querySelector("form");
const userName_Input = document.querySelector("#username");
const userError = document.querySelector("#username-component small");
const email_Input = document.querySelector("#email");
const email_Error = document.querySelector("#email-component small");
const password_Input = document.querySelector("#password");
const password_Error = document.querySelector("#password-component small");
const password_Confirm = document.querySelector("#conf-password");
const password_Confirm_error = document.querySelector("#conf-component small");
//const submit_btn = document.querySelector("#submit-btn");

const stlyeValid = (input) => {
  input.style.borderColor = "#2ecc71";
};

const validate_username = (user_name, userError) => {
  if (user_name.value.trim().length < 3) {
    userError.style.display = "block";
  } else {
    stlyeValid(user_name);
    userError.style.display = "none";
  }
};

const validate_email = (email, emailError) => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
    stlyeValid(email);
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }
};

const vaildate_password = (password, passwordError) => {
  if (password.value.trim().length < 6) {
    passwordError.style.display = "block";
    return false;
  } else {
    stlyeValid(password);
    passwordError.style.display = "none";
    return true;
  }
};

const validate_Confpassword = (
  password,
  password_Confirm,
  password_Confirm_error
) => {
  if (password.value.trim().length === 0) {
    password_Confirm_error.textContent = "Password2 is requierd";
    password_Confirm_error.style.display = "block";
  } else if (password.value.trim() !== password_Confirm.value.trim()) {
    password_Confirm_error.textContent = "Passwords do not match";
    password_Confirm_error.style.display = "block";
  } else {
    stlyeValid(password_Confirm);
    password_Confirm_error.style.display = "none";
  }
};

const validate_function = (
  user_name,
  userError,
  email,
  emailError,
  password,
  passwordError,
  password_Confirm,
  password_Confirm_error
) => {
  validate_username(user_name, userError);
  validate_email(email, emailError);
  vaildate_password(password, passwordError);
  validate_Confpassword(password, password_Confirm, password_Confirm_error);
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validate_function(
    userName_Input,
    userError,
    email_Input,
    email_Error,
    password_Input,
    password_Error,
    password_Confirm,
    password_Confirm_error
  );
});
