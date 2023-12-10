function validateEmail(email) {
  if (email.includes("@") && email.includes(".")) return true;
  return false;
}

module.exports = validateEmail;
