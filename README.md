# React TypeScript Authentication App

A full-stack application demonstrating user authentication, theme switching, and protected routes using React, TypeScript, and Node.js.

## Features

- User authentication with JWT
- Dark/Light theme switching
- Protected routes
- Responsive sidebar navigation
- Modern UI design

## Tech Stack

### Frontend
- React
- TypeScript
- CSS3
- Context API for state management

### Backend
- Node.js
- Express
- JWT for authentication
- bcrypt for password hashing

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd my-first-cursor-app
```

2. Install frontend dependencies:
```bash
npm install
```

3. Install backend dependencies:
```bash
cd backend
npm install
```

4. Create environment files:

Frontend (.env):
```
REACT_APP_API_URL=http://localhost:5001/api
```

Backend (.env):
```
PORT=5001
JWT_SECRET=your-super-secret-key-change-this-in-production
```

### Running the Application

1. Start the backend server:
```bash
cd backend
npm run dev
```

2. In a new terminal, start the frontend:
```bash
npm start
```

The application will be available at `http://localhost:3000`

### Test Credentials
```
Username: admin
Password: admin123
```

## Project Structure

```
my-first-cursor-app/
├── src/
│   ├── components/      # React components
│   ├── contexts/        # Context providers
│   ├── pages/          # Page components
│   └── ...
├── backend/
│   ├── routes/         # API routes
│   ├── server.js       # Express server
│   └── ...
└── ...
```

## Available Scripts

In the project directory, you can run:

- `npm start` - Runs the frontend in development mode
- `npm build` - Builds the frontend for production
- `npm test` - Runs the test suite

In the backend directory:
- `npm run dev` - Runs the backend with nodemon
- `npm start` - Runs the backend in production mode

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
