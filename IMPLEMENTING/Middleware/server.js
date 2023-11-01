const express = require('express');
const app = express();
const port = 3000;

// Custom middleware to log incoming requests
app.use((req, res, next) => {
  const timestamp = new Date().toLocaleString();
  const method = req.method;
  const url = req.url;
  console.log(`[${timestamp}] ${method} ${url}`);
  next(); // Call next to pass control to the next middleware or route handler.
});

// Route handler
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
