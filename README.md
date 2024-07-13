# CRUD Backend API using MongoDB, Node.js, and Express.js

This project is a simple CRUD (Create, Read, Update, Delete) backend API built using MongoDB as the database, Node.js as the server runtime, and Express.js as the web framework.

## Prerequisites

Before running this project locally, ensure you have the following installed:

- Node.js (v14.x or higher)
- npm (v6.x or higher)
- MongoDB (Make sure MongoDB server is running locally or provide a remote connection URI)

## Getting Started

Follow these steps to get the project running on your local machine:

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory of the project with the following variables:

   ```plaintext
   PORT=3000             # Port on which the server will run
   MONGODB_URI=your_mongodb_connection_string
   ```

   Replace `your_mongodb_connection_string` with your MongoDB connection URI.

4. **Start the server:**

   ```bash
   npm start
   ```

   This will start the server at `http://localhost:3000`.

## Available API Endpoints

- **GET /api/items**
  - Fetches all items from the database.

- **GET /api/items/:id**
  - Fetches a single item by its ID.

- **POST /api/items**
  - Creates a new item. Requires a JSON body with item data.

- **PUT /api/items/:id**
  - Updates an existing item by its ID. Requires a JSON body with updated item data.

- **DELETE /api/items/:id**
  - Deletes an item by its ID.

## Testing

You can test the API using tools like Postman or curl. Here are example requests:

- **GET all items:**
  ```
  GET http://localhost:3000/api/products
  ```

- **GET single item:**
  ```
  GET http://localhost:3000/api/products/:id
  ```

- **POST new item:**
  ```
  POST http://localhost:3000/products/items
  Content-Type: application/json

  {
    "name": "New Item",
    "cost": "Description of the new item"
  }
  ```

- **PUT update item:**
  ```
  PUT http://localhost:3000/api/products/:id
  Content-Type: application/json

  {
    "name": "Updated Item Name",
    "cost": "Updated description"
  }
  ```

- **DELETE item:**
  ```
  DELETE http://localhost:3000/api/products/:id
  ```
