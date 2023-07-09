const express = require('express');
const path = require('path');

const app = express();

// Define the route handler for the root URL ("/")
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Serve static files from the current directory
app.use(express.static(__dirname));

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});

