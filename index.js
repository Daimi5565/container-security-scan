const express = require('express');
const app = express();
const port = process.env.PORT || 8082; // Change to 8082 to avoid conflict with Jenkins

// Middleware for JSON parsing (if needed)
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
    res.type('text/plain'); // Set the Content-Type header
    res.send('Hello, World!');
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Start the server
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
