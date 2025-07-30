
# NodeJs-Microservice-Interview

This project contains two microservices built with Node.js: **User Service** and **Company Service**. These services are designed to demonstrate a basic microservice architecture where services communicate via REST APIs. 

---

## 📚 Table of Contents

- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Microservices](#microservices)
- [Getting Started](#getting-started)
- [API Documentation](#api-documentation)
  - [User Service](#user-service)
  - [Company Service](#company-service)
- [Inter-Service Communication](#inter-service-communication)
- [Project Structure](#project-structure)



---

## 📌 Project Overview

You are required to implement two separate microservices:

- **User Service**: Manages user data.
- **Company Service**: Manages company data.

The **User Service** references companies via `companyId`. When fetching a user by ID, the API also fetches full company details by calling the **Company Service**.

---

## ⚙️ Tech Stack

| Layer              | Technology       |
|--------------------|------------------|
| Language           | Node.js          |
| Web Framework      | Express.js       |
| Database           | PostgreSQL
| API Communication  | REST APIs        |
| Package Manager    | npm              |
| Dev Tooling        | nodemon          |

---

## 🧩 Microservices

### 1. **User Service**

Handles user CRUD operations and retrieves company data from the Company Service.

Fields:

- `id` (ObjectId)
- `name`
- `email`
- `companyId` (Foreign key to Company)

---

### 2. **Company Service**

Handles company CRUD operations.

Fields:

- `id` (ObjectId)
- `name`
- `address`

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/harshitkachhadia/NodeJs-Microservice-Interview.git
cd NodeJs-Microservice-Interview
```

---

### 2. Install dependencies for both services

```bash
# User Service
cd user-service
npm install

# Company Service
cd ../company-service
npm install
```

---


### 3. Start both services

Use two separate terminals:

```bash
# Terminal 1 - User Service
cd user-service
npm run dev

# Terminal 2 - Company Service
cd company-service
npm run dev
```

## 📡 API Documentation

### 📘 User Service

**Base URL**: `http://localhost:3001`

| Method | Endpoint      | Description                 |
|--------|---------------|-----------------------------|
| POST   | /users        | Create a new user           |
| GET    | /users        | Get all users               |
| GET    | /users/:id    | Get user by ID + company    |

**Example POST Body:**

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "companyId": "64cb1f7c91fc2a174e3d5a7e"
}
```

---

### 📘 Company Service

**Base URL**: `http://localhost:3002`

| Method | Endpoint       | Description              |
|--------|----------------|--------------------------|
| POST   | /companies     | Create a new company     |
| GET    | /companies     | Get all companies        |
| GET    | /companies/:id | Get company by ID        |

**Example POST Body:**

```json
{
  "name": "TechCorp",
  "address": "123 Silicon Valley"
}
```

---

## 🔗 Inter-Service Communication

When calling `GET /users/:id`, the **User Service** sends a request to the **Company Service** to include full company info in the response.

**Example Final Response:**

```json
{
  "id": "u123",
  "name": "John Doe",
  "email": "john@example.com",
  "company": {
    "id": "c456",
    "name": "TechCorp",
    "address": "123 Silicon Valley"
  }
}
```

---

## 🗂️ Project Structure

```plaintext
NodeJs-Microservice-Interview/
│
├── user-service/
│   └── src/
│       ├── config/         # Configuration files (e.g., DB connection, service URLs)
│       ├── controllers/    # User-related request handlers
│       ├── models/         # User model definitions (e.g., Mongoose)
│       ├── routes/         # User API route definitions
│       ├── app.ts          # Express app setup
│       └── index.ts        # Service entry point
│
├── company-service/
│   └── src/
│       ├── config/         # Configuration files (e.g., DB connection)
│       ├── controllers/    # Company-related request handlers
│       ├── models/         # Company model definitions
│       ├── routes/         # Company API route definitions
│       ├── app.ts          # Express app setup
│       └── index.ts        # Service entry point


