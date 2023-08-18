const express = require('express');
const itemRouter = require('./routes/item');
const app = express();
const port = 5000;

app.use(express.json());

app.use(itemRouter);

app.get('/ping', (req, res) => {
  try {
    res.status(200).json({ message: 'CHECK' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on  http://localhost:${port}`);
});
