# 🎓 The Batchmates — College Social Network & Campus Platform

[![MERN Stack](https://img.shields.io/badge/Stack-MERN%20(MongoDB%2C%20Express%2C%20React%2C%20Node)-blue.svg)](https://github.com/Himanshuzen10x/TheBatchMates)
[![Vite](https://img.shields.io/badge/Frontend-React.js%20(Vite)-646CFF.svg)](https://vitejs.dev/)
[![Vercel](https://img.shields.io/badge/Backend-Vercel%20Serverless-000000.svg)](https://vercel.com)
[![Netlify](https://img.shields.io/badge/Frontend%20Hosting-Netlify-00C7B7.svg)](https://netlify.com)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

**The Batchmates** is a modern, feature-rich social network engineered specifically for college campuses, batchmates, and university students. It empowers students to share status updates, run interactive campus polls, participate in college events, tag secret campus crushes with celebratory match popups, and engage in real-time 1-on-1 messaging.

---

## 👨‍💻 Developed By

- **Lead Developer & Creator:** **Himanshu Khare**
- 📸 **Instagram:** [@himanshuk.hare](https://instagram.com/himanshuk.hare)
- 🐙 **GitHub:** [Himanshuzen10x](https://github.com/Himanshuzen10x)
- 📦 **Repository:** [https://github.com/Himanshuzen10x/TheBatchMates](https://github.com/Himanshuzen10x/TheBatchMates)

---

## 🌟 Key Features

### 1. 💬 1-on-1 Direct Messaging & Inboxes
- **Live Polling Chat Stream:** Instant 1-on-1 direct messaging with friends.
- **Glitch-Free Container Scroll:** Inner container-locked scrolling (`overscroll-behavior: contain`) prevents whole-page jumping or window shifting during message updates.
- **Unread Counters & Active Indicators:** Real-time online status indicators and unread badge counters.

### 2. 📊 Campus Polls & Interactive Voting
- **Multi-Choice Poll Creator:** Post status updates with embedded multi-choice campus polls.
- **Live Voting Calculations:** Instant percentage calculation bars with smooth CSS transitions when users cast votes.

### 3. 💘 Secret Crush Tagging & Celebration Modals
- **100% Confidential Crush Tagging:** Secretly tag your campus crush directly on their profile. Target users are never notified until a mutual match occurs.
- **Celebratory Match Popups:** When a mutual crush tag matches, both batchmates receive a high-energy celebratory popup modal with confetti and direct chat buttons.

### 4. 👥 Friends System & "People You May Know"
- **Friend Request Lifecycle:** Send, accept, or ignore friend requests.
- **Multi-Click Submit Locks:** Double-click protection on `Confirm` and `Ignore` buttons to eliminate race conditions and duplicate API calls.
- **Suggestions Scroll Box:** Dedicated "People You May Know" sidebar widget with custom overflow scrolling.

### 5. 📢 Campus Events & Hackathons Board
- **College Event Directory:** Post and discover upcoming campus workshops, technical hackathons, cultural fests, and sports meets.
- **RSVP & Attendance:** Express interest or RSVP to stay updated on event schedules.

### 6. 🔒 AI Media Moderation & Cloud Infrastructure
- **Secure Image Uploads:** Cloudinary integration for fast global image hosting.
- **AWS Rekognition Moderation:** Automated AI safety filtering to keep campus feeds clean and free of NSFW/objectionable media.
- **JWT & Password Encryption:** Secure authentication powered by JSON Web Tokens and Bcryptjs hashing.

---

## 🛠️ Tech Stack & Architecture

### **Frontend (Client)**
- **Framework:** React.js 18 (powered by Vite)
- **Routing:** React Router v6 (Single Page Application with SPA `_redirects`)
- **State & Context:** Global `AuthContext` for user session & API token management
- **Styling:** Custom Vanilla CSS Design System (Responsive 3-Column Facebook/Twitter-style layout, Glassmorphism UI)
- **HTTP Client:** Axios with dynamic BaseURL fallbacks

### **Backend (Server)**
- **Runtime:** Node.js (v18+)
- **Framework:** Express.js (REST API architecture)
- **Database:** MongoDB Atlas with Mongoose ODM
- **Authentication:** JWT (JSON Web Tokens) & HTTP Bearer Headers
- **Media Uploads:** Multer + Cloudinary SDK + AWS Rekognition SDK

### **Deployment & Cloud Infrastructure**
- **Frontend App:** Netlify (Continuous Deployment from GitHub `main` branch)
- **Backend API:** Vercel Serverless Functions (`server` directory)

---

## 📁 Repository Structure

```
TheBatchMates/
├── client/                     # Frontend React.js Application
│   ├── public/                 # Static assets & Netlify _redirects
│   │   ├── favicon.ico
│   │   └── _redirects
│   ├── src/
│   │   ├── components/         # Reusable UI Components
│   │   │   ├── Navbar.jsx      # Sticky top navigation bar
│   │   │   ├── Post.jsx        # Feed Post, Comments & Poll voting
│   │   │   ├── CreatePost.jsx  # Status, Photo & Poll publisher
│   │   │   └── MatchModal.jsx  # Secret Crush match celebration popup
│   │   ├── context/            # AuthContext (JWT & User state)
│   │   ├── pages/              # Main Route Pages
│   │   │   ├── Home.jsx        # Public & Friends Feed + Right Sidebar
│   │   │   ├── Friends.jsx     # Direct Messages & Inboxes (3-col layout)
│   │   │   ├── Profile.jsx     # User Profile & Secret Crush button
│   │   │   ├── Events.jsx      # Campus Events & Hackathons
│   │   │   ├── Search.jsx      # Batchmate Discovery Search
│   │   │   ├── Settings.jsx    # Password & Profile settings
│   │   │   ├── About.jsx       # Project info & Developer Bio
│   │   │   ├── Terms.jsx       # Terms of Service & Guidelines
│   │   │   └── Privacy.jsx     # Privacy Policy & Crush Guarantee
│   │   ├── App.jsx             # React Routes & App Shell
│   │   └── App.css             # Unified CSS Design System
│   └── vite.config.js          # Vite build configuration
│
└── server/                     # Backend Node.js Express API
    ├── config/                 # Database connection (db.js)
    ├── middleware/             # Auth JWT verification middleware
    ├── models/                 # Mongoose Data Schemas
    │   ├── User.js             # User accounts & Crush array
    │   ├── Post.js             # Posts, Comments, & Poll options
    │   ├── Message.js          # Direct 1-on-1 Messages
    │   └── Event.js            # Campus Events
    ├── routes/                 # Express REST Endpoints
    │   ├── auth.js             # Register, Login, Me
    │   ├── users.js            # Profiles, Search, Crushes, Unseen Matches
    │   ├── friends.js          # Requests, Accept, Reject, Suggestions
    │   ├── posts.js            # Create, Like, Comment, Vote
    │   ├── messages.js         # Conversation streams & Send
    │   └── events.js           # List & Create Events
    ├── server.js               # Express app entry point
    └── vercel.json             # Vercel serverless deployment routing
```

---

## ⚡ Setup & Run Locally

### Prerequisites
- Node.js (v18.0.0 or higher)
- MongoDB Atlas cluster URI
- Free Cloudinary account (optional for image uploads)

### 1. Clone Repository
```bash
git clone https://github.com/Himanshuzen10x/TheBatchMates.git
cd TheBatchMates
```

### 2. Configure Backend (`server`)
```bash
cd server
npm install
```
Create a `.env` file inside the `server/` directory:
```env
PORT=5001
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/thebatchmates?retryWrites=true&w=majority
JWT_SECRET=your_super_secret_jwt_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```
Run the local backend server:
```bash
npm run dev
```

### 3. Configure Frontend (`client`)
Open a new terminal tab and navigate to the `client/` directory:
```bash
cd client
npm install
```
Create a `.env` file inside the `client/` directory:
```env
VITE_API_URL=http://localhost:5001/api
```
Run the local Vite dev server:
```bash
npm run dev
```

### 4. Access Application
- **Frontend UI:** `http://localhost:5173`
- **Backend API:** `http://localhost:5001/api`

---

## 📡 REST API Overview

| Category | Method | Endpoint | Description |
| :--- | :--- | :--- | :--- |
| **Auth** | `POST` | `/api/auth/register` | Register new student account |
| **Auth** | `POST` | `/api/auth/login` | Login user & return JWT token |
| **Auth** | `GET` | `/api/auth/me` | Fetch authenticated user data |
| **Users** | `GET` | `/api/users/profile/:id` | Fetch user profile details |
| **Users** | `POST` | `/api/users/crush/:id` | Tag secret crush on batchmate |
| **Users** | `GET` | `/api/users/unseen-matches` | Check mutual crush match status |
| **Friends**| `GET` | `/api/friends/suggestions` | Fetch suggested batchmates |
| **Friends**| `POST` | `/api/friends/request/:id` | Send friend request |
| **Friends**| `PUT` | `/api/friends/accept/:id` | Confirm friend request |
| **Friends**| `PUT` | `/api/friends/reject/:id` | Ignore friend request |
| **Posts** | `GET` | `/api/posts` | Fetch public campus feed |
| **Posts** | `POST` | `/api/posts` | Publish new text/photo/poll post |
| **Posts** | `POST` | `/api/posts/:id/vote` | Cast vote on poll post |
| **Messages**| `GET` | `/api/messages/:friendId` | Fetch 1-on-1 conversation stream |
| **Messages**| `POST` | `/api/messages/send` | Send direct message to friend |

---

## 📄 License & Community Guidelines

This project is open source and maintained for educational and campus community building purposes under the [MIT License](LICENSE).

Developed with ❤️ by **Himanshu Khare** ([@himanshuk.hare](https://instagram.com/himanshuk.hare)).
