<h1>Orinson Technologies Backend Development Task3 - Book Management API</h1>
    <p>This project is a simple RESTful API for managing a list of books, built using Node.js and Express with MongoDB as the database.</p>

  <h2>Project Features</h2>
    <ul>
        <li>CRUD operations for managing books (Create, Read, Update, Delete)</li>
        <li>Book model with fields: title, author, and year</li>
        <li>Error handling and basic validation for input</li>
    </ul>

  <h2>Setup Instructions</h2>
    <ol>
        <li>Clone the repository: <code>git clone https://github.com/BereketZz/Orinson-Tech-task3.git</code></li>
        <li>Install dependencies: <code>npm install</code></li>
        <li>Create a <code>.env</code> file and add your MongoDB connection string: <code>MONGO_URI=your_mongodb_connection_string</code></li>
        <li>Start the server: <code>npm start</code></li>
    </ol>

  <h2>API Endpoints</h2>
    <ul>
        <li><strong>GET /books</strong> - Get a list of all books</li>
        <li><strong>GET /books/:id</strong> - Get details of a specific book by ID</li>
        <li><strong>POST /books</strong> - Add a new book</li>
        <li><strong>PUT /books/:id</strong> - Update an existing book's details</li>
        <li><strong>DELETE /books/:id</strong> - Delete a book by ID</li>
    </ul>

  <h2>Technologies Used</h2>
    <ul>
        <li>Node.js</li>
        <li>Express</li>
        <li>MongoDB</li>
    </ul>

  <h2>Testing</h2>
    <p>You can use Postman or any API testing tool to test the endpoints.</p>
