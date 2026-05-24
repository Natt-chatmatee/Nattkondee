const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

// Serve all static files in the same directory
app.use(express.static(__dirname));

// Root → intercompany.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'intercompany.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
