## Latest Modules & Utilities

### React Hooks

- `src/hooks/useApi.js`: Generic hook to wrap any API call with loading, error, and data state. Use `callApi` to invoke async functions and handle errors via `handleError`.
- `src/hooks/usePaymentApi.js`: Manages payment API calls and state for payment, refund, and status operations.

### Error Handling

- `src/components/ErrorBoundary.jsx`: Catches JavaScript errors in the component tree, logs them, and renders a user-friendly fallback UI.
- `src/utils/errorHandler.js`: Maps error types to HTTP status codes and formats error responses for frontend display. Use `handleError(error)` in hooks and components.
- `src/errors/index.js`: Custom error classes for validation, business, and system errors. Each accepts a message and optional details.

### Payment Service

- `src/services/paymentService.js`: Integrates with a 3rd-party payment API. Provides `processPayment`, `refundPayment`, and `checkPaymentStatus` methods. Handles API failures with `ApiError`.

### Usage Example

```js
import useApi from "./src/hooks/useApi";
import { ValidationError } from "./src/errors";
import { handleError } from "./src/utils/errorHandler";

const { loading, data, error, callApi } = useApi();

// Example API call
callApi(async () => {
  // ...your async API logic
});

try {
  // ...some code that may throw
} catch (err) {
  const normalized = handleError(err);
  // Display normalized error in UI
}
```

## Error Handling Utilities

This project includes robust error handling for both backend and frontend:

- `src/errors/index.js`: Custom error classes for validation, business, and system errors.
  - `ValidationError`: For input validation issues (HTTP 400).
  - `BusinessError`: For business logic violations (HTTP 422).
  - `SystemError`: For unexpected system failures (HTTP 500).
- `src/utils/errorHandler.js`: Maps error types to HTTP status codes and formats error responses for frontend display.
  - Use `handleError(error)` to normalize errors in React components and hooks.

### Usage Example

```js
import { ValidationError, BusinessError, SystemError } from "./src/errors";
import { handleError } from "./src/utils/errorHandler";

try {
  // ...some code that may throw
} catch (err) {
  const normalized = handleError(err);
  // Display normalized error in UI
}
```

## Payment API Demo

This project includes a demo integration with a 3rd-party payment API, featuring:

- `src/pages/PaymentDemo.jsx`: Responsive demo page with Material UI layout, title, and description.
- `src/components/PaymentForm.jsx`: Material UI form for processing payments, checking status, and requesting refunds.
- `src/hooks/usePaymentApi.js`: React hook for managing payment API calls and state.
- `src/services/paymentService.js`: Service for interacting with the payment API using a reusable Axios client.
- `src/api/httpClient.js`: Configured Axios client with interceptors and retry logic.
- `src/utils/ApiError.js`: Standardized error handling for API/network failures.

### Features

- Make payments, check payment status, and request refunds.
- Success and error messages are displayed in a Material UI Card layout.
- All API calls are handled with robust error management and loading indicators.

### Usage

Import and use `PaymentDemo` in your React app to showcase payment API integration with a clean, modern UI.

## Authentication & Authorization Error Classes

Located in `src/authErrors.js`, these custom error classes are used for clean exception handling in authentication and authorization flows:

- `AuthError` (401): Generic authentication required error.
- `InvalidCredentialsError` (401): Invalid username or password.
- `TokenInvalidError` (401): Token is invalid or revoked.
- `TokenExpiredError` (401): Token has expired.
- `ForbiddenError` (403): User lacks required roles/permissions.

Each class extends the native Error object, sets its `name`, a default message, and an HTTP `status` property. All are exported for use across authentication services.

# Full-Stack User Login & Payment Demo App

This project provides a complete solution for user authentication, payment API integration, and robust error handling using Node.js (Express) and React.

## Features

- **Express REST API** for user login with CRUD endpoints
- **Password hashing** with bcrypt
- **Input validation** and error handling
- **React User Login screen** with CRUD operations
- **Payment API demo** with Material UI, Axios, and robust error handling
- **Reusable Axios HTTP client** with interceptors and retry logic
- **Custom error classes** and error normalization utilities
- **Configurable API URL** via `.env`
- **In-memory sample data** for demonstration

## Backend (Express)

- Entry point: `src/server.js`
- Endpoints:
  - `GET /users` - Fetch all users
  - `GET /users/:id` - Fetch user by ID
  - `POST /users` - Create/login user
  - `PUT /users/:id` - Update user
  - `DELETE /users/:id` - Delete user
- Error handling and input validation included

### Start Backend

```powershell
npm start
```

## Frontend (React)

- Main component: `src/UserLogin.js`
- Payment demo: `src/pages/PaymentDemo.jsx` and `src/components/PaymentForm.jsx`
- API calls via Axios and custom hooks
- Error boundaries and error normalization utilities
- Responsive UI with Material UI

### Start Frontend

```powershell
npm run react-start
```

## Environment Variables

- Set API URL in `.env`:
  ```env
  REACT_APP_API_URL=http://localhost:3000/users
  REACT_APP_API_BASE_URL=http://localhost:3000
  REACT_APP_API_KEY=your-api-key
  ```

## Project Structure

```
src/
	server.js           # Express backend entry
	app.js              # React frontend entry
	UserLogin.js        # React login component
	UserLogin.css       # CSS for login screen
	pages/PaymentDemo.jsx
	components/PaymentForm.jsx
	components/ErrorBoundary.jsx
	hooks/usePaymentApi.js
	hooks/useApi.js
	services/paymentService.js
	services/userService.js
	api/httpClient.js
	utils/ApiError.js
	utils/errorHandler.js
	errors/index.js
	routes/userRoutes.js
	controllers/userController.js
	middleware/validateUser.js
	middleware/errorHandler.js
	authErrors.js
```


