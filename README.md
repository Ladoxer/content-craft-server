# Content Craft Server

Welcome to the Content Craft Server! This is the backend application for the Content Craft CMS, built using Nest.js. This application handles user authentication, article management, and API services for the frontend.

## Table of Contents

- [Live Demo](#live-demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)

## Live Demo

Check out the live application [here](https://content-craft-three.vercel.app/). Note that the backend is hosted on Render and may take some time to load.

## Features

- User Registration and Login
- JWT Authentication and Authorization
- CRUD Operations for Articles
- RESTful API Services
- MongoDB Integration
- Error Handling and Validation

## Technologies Used

- Nest.js
- TypeScript
- MongoDB
- Mongoose
- Passport.js (for authentication)
- JWT

## Getting Started

### Prerequisites

Make sure you have the following installed on your system:

- Node.js (v14 or above)
- npm or yarn
- MongoDB

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/Ladoxer/content-craft-server.git
    ```

2. Navigate to the project directory:

    ```bash
    cd content-craft-server
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

### Running the Application

1. Start MongoDB:

    Make sure MongoDB is running on your system. If you are using MongoDB Atlas, ensure you have the connection string.

2. Add environment variables:

    Create a `.env` file in the root directory and add the following variables:

    ```env
    MONGODB_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret_key
    JWT_EXPIRE=3d
    FRONTEND_URL=your_frontend_url
    ```

3. Start the development server:

    ```bash
    npm run start:dev
    ```

4. The server will start on `http://localhost:3000`.

## Project Structure

```
content-craft-server/
├── src/
│   ├── auth/
│   │   ├── auth.controller.ts
│   │   ├── auth.module.ts
│   │   ├── auth.service.ts
│   │   ├── jwt.strategy.ts
│   ├── articles/
│   │   ├── articles.controller.ts
│   │   ├── articles.module.ts
│   │   ├── articles.service.ts
│   │   ├── schemas/
│   ├── users/
│   │   ├── users.controller.ts
│   │   ├── users.module.ts
│   │   ├── users.service.ts
│   │   ├── schemas/
│   ├── app.module.ts
│   ├── main.ts
├── test/
├── .env
├── nest-cli.json
├── package.json
├── README.md
└── tsconfig.json
```

## Environment Variables

To run this project, you will need to add the following environment variables to your `.env` file:

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRE=3d
FRONTEND_URL=your_frontend_url
```

## API Documentation

### Authentication

- **POST /auth/register**: Register a new user
- **POST /auth/login**: Log in a user and get a JWT

### Articles

- **GET /articles**: Get all articles
- **GET /articles/:id**: Get an article by ID
- **POST /articles**: Create a new article (authenticated)
- **PUT /articles/:id**: Update an article by ID (authenticated)
- **DELETE /articles/:id**: Delete an article by ID (authenticated)

### Users

- **GET /users**: Get all users (admin only)

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.