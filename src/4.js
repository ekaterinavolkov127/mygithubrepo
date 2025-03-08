// Create a new express server
const express = require('express');
const app = express();

// Set up a route to handle GET requests
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server and listen on port 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
