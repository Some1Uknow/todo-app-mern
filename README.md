# MERN Stack Todo Application

This is a simple Todo application built using the MERN (MongoDB, Express, React, Node.js) stack. It allows users to create, view, and delete todo items.

## Features

- Add new todo items
- View list of todo items
- Delete todo items
- Real-time updates

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)
- MongoDB (v4.0.0 or later)

## Installation

To install the Todo application, follow these steps:

1. Clone the repository:
```
git clone https://github.com/your-username/todo-app-mern.git
cd todo-app-mern
```

2. Install backend dependencies:
```
cd backend
npm install
```

3. Install frontend dependencies:
```
cd frontend
npm install
```

## Configuration

1. In the `backend` directory, create a `.env` file with the following content:
```
MONGODB_URL=your_mongodb_connection_string
PORT=5000
```
Replace `your_mongodb_connection_string` with your MongoDB connection string.

## Running the Application

To run the Todo application, follow these steps:

1. Start the backend server:
``` 
cd backend
npm run dev
```
2. Start the frontend server:
```
cd frontend
npm start
```
Open your web browser and navigate to `http://localhost:3000` to access the Todo application

## Usage

- To add a new todo, type your task in the input field and click "Submit" or press Enter.
- To delete a todo, click the "×" button next to the todo item.
- The total number of todos is displayed at the top of the list.