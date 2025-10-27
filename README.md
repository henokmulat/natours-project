#  Natours API

> A complete **RESTful API** for a fictional **tour booking application**, built with **Node.js**, **Express**, **MongoDB**, and **Mongoose** — featuring authentication, authorization, security, and advanced backend engineering concepts.

![Node.js](https://img.shields.io/badge/Node.js-18.x-green?logo=node.js)
![Express](https://img.shields.io/badge/Express.js-Framework-black)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-brightgreen?logo=mongodb)
![Mongoose](https://img.shields.io/badge/Mongoose-ODM-orange)
![License](https://img.shields.io/badge/License-MIT-blue)
![Deployment](https://img.shields.io/badge/Deployed%20on-Render-purple)

---

##  Overview

**Natours API** is a production-ready backend for a nature tour booking service.  
It is the core project from **Jonas Schmedtmann’s "Node.js, Express, MongoDB & More: The Complete Bootcamp"** — fully restructured and enhanced for real-world deployment and portfolio presentation.

This backend powers a tour-booking platform where users can browse available tours, book them securely using Stripe payments, and manage their profiles — all while maintaining top-level performance and security standards.

---

## Features

###  Authentication & Security
- JWT-based **user authentication** & **role-based access control**
- Password hashing, password reset via email
- Rate limiting, data sanitization, and HTTP security headers
- Prevents NoSQL injection and XSS attacks

###  Tour Management
- CRUD operations for tours (Admin/Lead Guide access)
- Filtering, sorting, pagination, and field limiting
- Geo-spatial queries (find tours within a radius)
- Virtual populate for reviews and guides

###  Reviews & Ratings
- Nested routes for reviews
- Only authenticated users can review booked tours
- Ratings average & quantity auto-calculated

### Booking & Payments
- Stripe integration for secure payments
- Booking creation on successful payment webhook
- Full booking history for users

### Media Uploads
- Image upload & processing using **Multer** and **Sharp**
- Optimized image resizing for performance

###  Advanced Backend Concepts
- Centralized error handling using global middleware
- Environment-based configuration (dev/prod)
- Asynchronous programming with Promises and async/await
- Factory pattern for controllers

---
## 🧩 API Architecture
natours/
├── app.js
├── server.js
├── config.env
├── package.json
├── controllers/
│ ├── authController.js
│ ├── bookingController.js
│ ├── errorController.js
│ ├── handlerFactory.js
│ ├── reviewController.js
│ └── tourController.js
├── models/
│ ├── userModel.js
│ ├── tourModel.js
│ ├── reviewModel.js
│ └── bookingModel.js
├── routes/
│ ├── userRoutes.js
│ ├── tourRoutes.js
│ ├── reviewRoutes.js
│ └── bookingRoutes.js
├── utils/
│ ├── apiFeatures.js
│ ├── appError.js
│ ├── catchAsync.js
│ └── email.js
└── dev-data/
├── data/
└── import-dev-data.js


> Built following the **Model-View-Controller (MVC)** pattern and **REST API** best practices.

---

## 🧠 Tech Stack

| Category | Technology |
|-----------|-------------|
| **Runtime** | Node.js (v18+) |
| **Framework** | Express.js |
| **Database** | MongoDB (with Mongoose ODM) |
| **Authentication** | JWT (JSON Web Token) |
| **Payment Integration** | Stripe API |
| **File Uploads** | Multer + Sharp |
| **Email Service** | SendGrid / Nodemailer |
| **Security Tools** | Helmet, Express Rate Limit, MongoSanitize, xss-clean |
| **Environment Variables** | dotenv |
| **Logging** | morgan |

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/henokmulat/natours-project.git
cd natours-project


## 🧩 API Architecture

