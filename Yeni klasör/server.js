// server.js
const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;  // Use the environment's port or default to 3000

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Root route - serves the index.html file (or any entry point to your app)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Catch-all route for any other path (useful for single-page apps)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
