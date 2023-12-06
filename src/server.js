const path = require('path');
const express = require('express');
const app = express();
app.use(express.json());
const PORT = 8080;

const publicDir = path.join(__dirname, '..', 'public');
const staticAssets = express.static(publicDir);
app.use(staticAssets);



app.listen(PORT, () => {
  console.log(`Server is now running on http://localhost:${PORT}`);
});