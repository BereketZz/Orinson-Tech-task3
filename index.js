const express = require('express');
const connectionDB = require('./config/db');
const bookRoutes = require('./routes/bookRoutes');


const app = express();

// Connect to the database
connectionDB();

// Middleware to parse JSON bodies
app.use(express.json());

// Health check route
app.get('/', (req, res) => {
    res.status(200).send({ msg: "API is working" });
});


// Routes
app.use('/api', bookRoutes);



// Start the server
const PORT = 3001;
app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));
