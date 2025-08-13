// Custom error classes for application error handling

class ValidationError extends Error {
  constructor(message, details = null) {
    super(message);
    this.name = "ValidationError";
    this.details = details;
  }
}

class BusinessError extends Error {
  constructor(message, details = null) {
    super(message);
    this.name = "BusinessError";
    this.details = details;
  }
}

class SystemError extends Error {
  constructor(message, details = null) {
    super(message);
    this.name = "SystemError";
    this.details = details;
  }
}

export { ValidationError, BusinessError, SystemError };
