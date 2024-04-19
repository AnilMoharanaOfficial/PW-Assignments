# User Management Backend With Express and MongoDB

This project is a user management backend system built using Express.js and MongoDB. It is allowing users to create, login account and profile. management.

### 1. User Registration

- **Endpoint**: `POST /api/user/register`
- **Description**: Allows users to create a new account.
- **Request Body**:
  - `name` (string, required): User's name.
  - `email` (string, required): User's email address.
  - `password` (string, required): User's password.
- **Response**:
  - `user` (object): Newly registered user object (excluding sensitive information like password).

### 2. User Login

- **Endpoint**: `POST /api/user/login`
- **Description**: Allows users to log in to their account.
- **Request Body**:
  - `email` (string, required): User's email address.
  - `password` (string, required): User's password.
- **Response**:
  - `user` (object): User object (excluding sensitive information like password).

## Error Handling

- **400 Bad Request**: When the request is invalid or missing required parameters.
  - Example Response: `{ "error": "Invalid email address" }`

- **401 Unauthorized**: When authentication fails due to invalid credentials.
  - Example Response: `{ "error": "Invalid email or password" }`
- **500 Internal Server Error**: When an unexpected error occurs on the server.
  - Example Response: `{ "error": "Internal server error" }`

