// errorHandler.js: Maps error types to HTTP status codes and formats error response

function handleError(error) {
  let status = 500;
  let message = error.message || "Internal Server Error";
  let details = error.details || null;

  if (error.name === "ValidationError") {
    status = 400;
  } else if (error.name === "BusinessError") {
    status = 422;
  } else if (error.name === "SystemError") {
    status = 500;
  }

  // Log error for debugging
  console.error(`[ErrorHandler]`, { status, message, details, error });

  return {
    timestamp: new Date().toISOString(),
    status,
    message,
    details,
  };
}

export { handleError };
