# 💰 SpendWise — Smart Expense Tracker

A full-stack, production-ready expense tracker with JWT authentication, real-time analytics, and a beautiful responsive UI.

![SpendWise](https://img.shields.io/badge/SpendWise-Expense%20Tracker-22c55e?style=for-the-badge)
![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react)
![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=flat-square&logo=node.js)
![MongoDB](https://img.shields.io/badge/MongoDB-8-47A248?style=flat-square&logo=mongodb)

---

## ✨ Features

- 🔐 **JWT Authentication** — Secure login/signup with HTTP-only cookies
- 📊 **Analytics Dashboard** — Area charts and pie charts via Recharts
- 💳 **Transaction Management** — Add, view, and delete income/expense transactions
- 🏷️ **Smart Categories** — 13 pre-defined categories for better organization
- 📱 **Fully Responsive** — Mobile-first design with hamburger menu
- 🌈 **Beautiful UI** — Tailwind CSS with custom design system
- ⚡ **Real-time Balance** — Instant updates on all financial metrics
- 🔒 **bcrypt Hashing** — Secure password storage with salt rounds

---

## 🛠️ Tech Stack

### Frontend
| Tech | Purpose |
|------|---------|
| React 18 | UI Framework |
| React Router DOM v6 | Client-side routing |
| Tailwind CSS | Styling |
| Axios | HTTP requests |
| React Context API | State management |
| Recharts | Data visualization |
| React Hot Toast | Notifications |

### Backend
| Tech | Purpose |
|------|---------|
| Node.js + Express | Server framework |
| MongoDB + Mongoose | Database |
| JWT | Authentication tokens |
| bcryptjs | Password hashing |
| cookie-parser | HTTP-only cookie handling |
| CORS | Cross-origin resource sharing |

---

## 📁 Project Structure

```
spendwise/
├── client/                    # React Frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx        # Responsive navbar with hamburger menu
│   │   │   ├── Footer.jsx        # Site footer
│   │   │   ├── StatCard.jsx      # Financial summary cards
│   │   │   ├── AddTransaction.jsx # Transaction form
│   │   │   ├── TransactionList.jsx # Transactions table
│   │   │   └── Charts.jsx        # Recharts analytics
│   │   ├── pages/
│   │   │   ├── HomePage.jsx      # Landing page
│   │   │   ├── LoginPage.jsx     # Login form
│   │   │   ├── SignupPage.jsx    # Registration form
│   │   │   └── DashboardPage.jsx # Main dashboard
│   │   ├── context/
│   │   │   ├── AuthContext.jsx   # Authentication state
│   │   │   └── TransactionContext.jsx # Transaction state
│   │   ├── routes/
│   │   │   └── ProtectedRoute.jsx # Route guard
│   │   ├── services/
│   │   │   └── api.js            # Axios instance
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── package.json
│
└── server/                    # Node.js Backend
    ├── config/
    │   └── db.js               # MongoDB connection
    ├── controllers/
    │   ├── authController.js   # Auth logic
    │   └── transactionController.js # Transaction CRUD
    ├── middleware/
    │   ├── auth.js             # JWT verification
    │   └── errorHandler.js     # Global error handler
    ├── models/
    │   ├── User.js             # User schema
    │   └── Transaction.js      # Transaction schema
    ├── routes/
    │   ├── auth.js             # Auth routes
    │   └── transactions.js     # Transaction routes
    ├── server.js               # Express app entry
    ├── .env                    # Environment variables
    └── package.json
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js >= 18
- MongoDB (local or MongoDB Atlas)
- npm or yarn

### 1. Clone / Extract

```bash
# Navigate into the project
cd spendwise
```

### 2. Setup Backend

```bash
cd server

# Install dependencies
npm install

# Configure environment variables
# Edit .env with your values:
nano .env
```

**.env configuration:**
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/spendwise
JWT_SECRET=your_super_secret_jwt_key_change_in_production
NODE_ENV=development
CLIENT_URL=http://localhost:5173
```

> 💡 For MongoDB Atlas, replace `MONGODB_URI` with your Atlas connection string.

```bash
# Start the backend server
npm run dev
```

Server runs at: **http://localhost:5000**

### 3. Setup Frontend

```bash
cd ../client

# Install dependencies
npm install

# Start the development server
npm run dev
```

App runs at: **http://localhost:5173**

### 4. Open the App

Navigate to **http://localhost:5173** in your browser.

---

## 🔌 API Endpoints

### Auth Routes
| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| POST | `/api/auth/signup` | Register new user | ❌ |
| POST | `/api/auth/login` | Login user | ❌ |
| POST | `/api/auth/logout` | Logout user | ✅ |
| GET | `/api/auth/me` | Get current user | ✅ |

### Transaction Routes
| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| GET | `/api/transactions` | Get all user transactions | ✅ |
| POST | `/api/transactions` | Create new transaction | ✅ |
| DELETE | `/api/transactions/:id` | Delete transaction | ✅ |

---

## 💡 Usage Guide

### 1. Create an Account
- Visit the home page and click **"Get Started"**
- Fill in your name, email, and password
- You'll be redirected to the dashboard automatically

### 2. Add Transactions
- On the dashboard, use the **Add Transaction** form on the left
- Select **Income** or **Expense** type
- Fill in title, amount, category, and date
- Click **Add Transaction**

### 3. View Analytics
- Charts automatically appear once you have transactions
- **Area Chart** — Monthly income vs expense comparison
- **Pie Chart** — Expense breakdown by category

### 4. Manage Transactions
- View all transactions in the table on the right
- Filter by All / Income / Expense
- Hover over a transaction to reveal the delete button

---

## 🎨 UI Features

- **Responsive Navbar** — Collapses to hamburger menu on mobile
- **Split Layout Auth Pages** — Decorative left panel + form right panel
- **Password Strength Meter** — Visual indicator on signup
- **Toast Notifications** — Success/error feedback on all actions
- **Loading States** — Spinners on all async operations
- **Empty States** — Friendly messages when no data exists
- **Hover Effects** — Smooth transitions throughout
- **Sticky Navbar** — Transforms on scroll with blur effect

---

## 🔒 Security Features

- JWT stored in **HTTP-only cookies** (not accessible via JavaScript)
- Passwords hashed with **bcrypt** (12 salt rounds)
- Protected routes on both frontend and backend
- CORS configured for specific origin
- Token verification middleware on all private routes
- User-scoped data — users can only access their own transactions

---

## 🏗️ Production Build

```bash
# Build frontend
cd client
npm run build

# The dist/ folder contains the production build
# Serve it with your Node.js server or a CDN
```

For production, update in `server/.env`:
```env
NODE_ENV=production
CLIENT_URL=https://yourdomain.com
JWT_SECRET=a-very-long-random-secret-key
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/spendwise
```

---

## 📦 Dependencies

### Client
```json
{
  "axios": "^1.6.2",
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-hot-toast": "^2.4.1",
  "react-router-dom": "^6.21.0",
  "recharts": "^2.10.3"
}
```

### Server
```json
{
  "bcryptjs": "^2.4.3",
  "cookie-parser": "^1.4.6",
  "cors": "^2.8.5",
  "dotenv": "^16.3.1",
  "express": "^4.18.2",
  "jsonwebtoken": "^9.0.2",
  "mongoose": "^8.0.3"
}
```

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

---

## 📄 License

MIT License — feel free to use this project for personal or commercial purposes.

---

Made with ❤️ using React, Node.js & MongoDB
