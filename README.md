<<<<<<< HEAD

# SpendWise - Expense Tracker

A full-stack MERN expense tracker application.

## Features

- User authentication (Signup/Login)
- Add income and expense transactions
- View monthly income, expenses, and balance
- Recent transactions on home page
- Dashboard with analytics

## Tech Stack

- Frontend: React, JSX, Axios
- Backend: Node.js, Express.js
- Database: MongoDB, Mongoose

## Setup

1. Install dependencies for both client and server:

   ```bash
   cd client
   npm install

   cd ../server
   npm install
   ```

2. Start MongoDB locally.

3. Update `.env` in server with your MongoDB URI and JWT secret.

4. Start the backend:

   ```bash
   cd server
   npm run dev
   ```

5. Start the frontend:

   ```bash
   cd client
   npm run dev
   ```

6. Open http://localhost:5173 for the app.

## API Endpoints

- POST /api/auth/register - Register user
- POST /api/auth/login - Login user
- GET /api/transactions - Get user transactions
- POST /api/transactions - Add transaction
- GET /api/transactions/summary - Get monthly summary
- DELETE /api/transactions/:id - Delete and update the transaction
  > > > > > > > 23f1c8c (added client server files - first commit)
