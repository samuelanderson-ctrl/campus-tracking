const express = require('express');
const path = require('path');
const app = require('./app');

const PORT = process.env.PORT || 3000;

// Serve React static files
app.use(express.static(path.join(__dirname, 'build')));

// Catch-all to serve index.html for SPA
app.get(/^\/.*$/, (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Campus Operations Tracker running on port ${PORT}`);
});
