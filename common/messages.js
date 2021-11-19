const messages = {
  USER_NOT_FOUND: "User not found.",
  USER_ALREADY_EXIST: "User already exist.",
  INVALID_PIN: "Pin does not match.",
  PIN_EXPIRED: "This pin expired.",
  USER_VERIFIED: "User already verified.",
  USER_LOGIN_ALREADY_EXIST: "User login details already exists in db.",
  REQUIRED_FIELD: "Please enter all required fields.",
  PIN_NOT_EXPIRED: "Your pin is not expired, try again later.",
  SESSION_EXPIRED: "Your Session has expired. Please login again.",
  SOMETHING_WRONG: "Something went wrong.",
  TOKEN_NOT_FOUND: "Token not found.",
  ACCESS_TOKEN_NOT_EXPIRED: "Access token not expired.",
  REFRESH_TOKEN_NOT_EXPIRED: "Refresh token not expired.",
  TOKEN_REVOKED_SUCCESS: "Token revoked successful.",
  NO_FILE_UPLOADED: "No file uploaded",
  FILE_SIZE_EXCEED: "File size exceed a maximum limit.",
  INCORRECT_PASSWORD: "Incorrect password.",
  ACCOUNT_NOT_ENABLED: "Please activate your account.",
  UNAUTHORIZED: "Not Authorized.",
};
const getMessage = (key) => {
  if (messages[key]) {
    return {
      message: messages[key],
    };
  }
  return "Message Key not Found!!";
};

module.exports = { getMessage };
