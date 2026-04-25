/**
 * Email validation utilities
 */

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Validates an email address
 * @param email - The email to validate
 * @returns true if email is valid or empty, false otherwise
 */
export function validateEmail(email: string): boolean {
  // Empty email is considered valid (optional field)
  if (email === "") {
    return true;
  }

  return EMAIL_PATTERN.test(email);
}

/**
 * Gets validation error message for an email
 * @param email - The email to validate
 * @returns Error message if invalid, empty string if valid
 */
export function getEmailValidationError(email: string): string {
  if (email === "") {
    // Empty is valid
    return "";
  }

  if (!EMAIL_PATTERN.test(email)) {
    return "Please enter a valid email address.";
  }

  return "";
}

export default {
  validateEmail,
  getEmailValidationError,
};
