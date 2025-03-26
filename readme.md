# Simple REST API with Node.js, Express, Firebase, and JWT Authentication

## 📌 Project Overview
This is a simple REST API built using **Node.js** and **Express** that allows users to be **created, retrieved, updated, and deleted (CRUD operations)**. The API uses **Firebase Firestore** for data storage and **JWT authentication** for secure access.

---

## 🚀 Features
- User Authentication with **JWT** (Signup & Login)
- Secure **Password Hashing** with **bcrypt.js**
- Firebase Firestore as a **Database**
- Full **CRUD** Operations for User Management
- **Error Handling & Input Validation**

---

## 📁 Project Structure
```
.
├── controllers/
│   ├── authController.js  # Handles authentication (signup, login)
│   ├── userController.js  # Handles user CRUD operations
│
├── models/
│   ├── userModel.js  # Database operations for users
│
├── routes/
│   ├── authRoutes.js  # Routes for authentication
│   ├── userRoutes.js  # Routes for user CRUD operations
│
├── config/
│   ├── firebase.js  # Firebase configuration
│
├── middleware/
│   ├── authMiddleware.js  # Protect routes using JWT authentication
│
├── .env  # Environment variables (JWT_SECRET, Firebase config)
├── server.js  # Main entry point
├── package.json  # Project dependencies
├── README.md  # Project documentation
```

---

## 🛠️ Installation & Setup
### 1️⃣ **Clone the Repository**
```sh
git clone https://github.com/your-repo/node-firebase-jwt-api.git
cd node-firebase-jwt-api
```

### 2️⃣ **Install Dependencies**
```sh
npm install
```

### 3️⃣ **Set Up Environment Variables**
Create a `.env` file in the root directory and add:
```
PORT=5000
JWT_SECRET=your_jwt_secret_key
FIREBASE_CONFIG={ "your_firebase_credentials_here" }
```

### 4️⃣ **Run the Server**
```sh
node server.js
```
or use **nodemon** for auto-restart:
```sh
npx nodemon server.js
```

---

## 🔑 API Endpoints

### **1️⃣ User Authentication**
#### ✅ **Sign Up (Create User)**
- **Endpoint:** `POST /auth/signup`
- **Request Body:**
```json
{
  "name": "John Doe",
  "email": "johndoe@example.com",
  "password": "securepassword"
}
```
- **Response:**
```json
{
  "message": "User created successfully"
}
```

#### ✅ **Log In (Generate JWT Token)**
- **Endpoint:** `POST /auth/login`
- **Request Body:**
```json
{
  "email": "johndoe@example.com",
  "password": "securepassword"
}
```
- **Response:**
```json
{
  "token": "your_jwt_token_here"
}
```

---

### **2️⃣ Protected Routes (Require JWT)**
#### 🔒 **Get All Users**
- **Endpoint:** `GET /users`
- **Headers:**
```json
{
  "Authorization": "Bearer your_jwt_token"
}
```

#### 🔒 **Update User**
- **Endpoint:** `PUT /users/:id`
- **Headers:** (Include JWT Token)
- **Request Body:**
```json
{
  "name": "Updated Name",
  "email": "updatedemail@example.com"
}
```

#### 🔒 **Delete User**
- **Endpoint:** `DELETE /users/:id`
- **Headers:** (Include JWT Token)

---
 

---

## 🛠 Technologies Used
- **Node.js** (Runtime Environment)
- **Express.js** (Web Framework)
- **Firebase Firestore** (Database)
- **JWT (jsonwebtoken)** (Authentication)
- **bcrypt.js** (Password Hashing)
- **dotenv** (Environment Variables)

 
---

## 👨‍💻 Author
Developed by **VAISHALI**  
GitHub: [GitHub Profile](https://github.com/Chaotic-calm)

