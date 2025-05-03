# Netflix Clone

A full-stack Netflix-like clone built with **React**, **Redux Toolkit**, **Tailwind CSS**, and **Express.js** (Node.js) with MongoDB Atlas for user authentication and The Movie Database (TMDb) API for movie data.

---

## Table of Contents

1. [Demo](#demo)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Prerequisites](#prerequisites)
5. [Getting Started](#getting-started)

   * [Clone Repository](#clone-repository)
   * [Environment Variables](#environment-variables)
   * [Installation](#installation)
   * [Running Locally](#running-locally)
6. [Deployment](#deployment)
7. [Folder Structure](#folder-structure)
8. [API Endpoints](#api-endpoints)
9. [Contributing](#contributing)
10. [License](#license)
11. [Acknowledgements](#acknowledgements)

---

## Demo

* **Frontend**: [https://netflix-clone-frontend-t83t.onrender.com](https://netflix-clone-frontend-t83t.onrender.com)
* **Backend**: [https://netflix-clone-backend-pf3z.onrender.com](https://netflix-clone-backend-pf3z.onrender.com/api/v1)

---

## Features

* User registration & login with JWT authentication
* Secure password hashing with Bcrypt
* Persistent user sessions via HTTP-only cookies
* Browse movie categories: Now Playing, Popular, Top Rated, Upcoming
* Responsive design with Tailwind CSS
* Video trailer playback using TMDb video API
* Search movies by title
* Protected routes for authenticated users

---

## Tech Stack

* **Frontend**: React, Redux Toolkit, React Router, Tailwind CSS, Axios
* **Backend**: Node.js, Express.js, MongoDB Atlas, Mongoose, Bcrypt, JSON Web Tokens, Cors
* **APIs**: The Movie Database (TMDb)
* **Deployment**: Render

---

## Prerequisites

* [Node.js](https://nodejs.org/) v16+
* [npm](https://npmjs.com/) or [yarn](https://yarnpkg.com/)
* MongoDB Atlas account (free tier)
* TMDb API key ([sign up here](https://www.themoviedb.org/documentation/api))

---

## Getting Started

### Clone Repository

```bash
git clone https://github.com/yourusername/netflix-clone.git
cd netflix-clone
```

### Environment Variables

Create a root `.env` file:

```env
# Backend
PORT=8080
MONGO_URI=your_mongodb_connection_string
CLIENT_URL=http://localhost:5173
SECRET_KEY=your_jwt_secret

# Frontend (Vite)
VITE_API_END_POINT=http://localhost:8080/api/v1
VITE_TMDB_API_KEY=your_tmdb_api_key
VITE_TMDB_BASE=https://api.themoviedb.org/3
```

### Installation

```bash
# Install backend dependencies\cnnpm install
# Install frontend dependencies
cd client
npm install
cd ..
```

### Running Locally

```bash
# Start backend
npm run start:server

# In a new terminal, start frontend
cd client
npm run dev
```

Your app should now be running at `http://localhost:5173`.

---

## Deployment

This app is deployed on Render. To replicate:

1. Push repository to GitHub.
2. In Render dashboard, create two services:

   * **Web Service** for backend:

     * Root Directory: `/server`
     * Build Command: `npm install`
     * Start Command: `npm start`
     * Environment: Node
   * **Static Site** for frontend:

     * Root Directory: `/client`
     * Build Command: `npm run build`
     * Publish Directory: `/client/dist`
3. Add environment variables in Render for each service (same names as local `.env`).
4. Deploy!

---

## Folder Structure

```
netflix-clone/
├── client/             # React front-end (Vite)
│   ├── public/         # Static assets
│   ├── src/            # React components & pages
│   ├── .env            # Frontend environment
│   └── package.json
├── server/             # Express back-end
│   ├── controllers/    # Route handlers
│   ├── models/         # Mongoose schemas
│   ├── routes/         # Express routers
│   ├── .env            # Backend environment
│   └── index.js        # Entry point
├── README.md
└── package.json        # Lerna-style or root configs if needed
```

---

## API Endpoints

### Auth

| Method | Endpoint           | Description        |
| ------ | ------------------ | ------------------ |
| POST   | `/api/v1/register` | Create a new user  |
| POST   | `/api/v1/login`    | Login & set cookie |
| GET    | `/api/v1/logout`   | Clear auth cookie  |

*(Other protected endpoints can be listed here.)*

---

## Contributing

1. Fork this repo
2. Create your feature branch (`git checkout -b feature/...`)
3. Commit your changes (`git commit -m 'Add awesome feature'`)
4. Push to branch (`git push origin feature/...`)
5. Open a Pull Request

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Acknowledgements

* [TMDb API](https://developers.themoviedb.org/)
* [React](https://reactjs.org/)
* [Redux Toolkit](https://redux-toolkit.js.org/)
* [Tailwind CSS](https://tailwindcss.com/)
* [Express.js](https://expressjs.com/)
* [Render](https://render.com/)
