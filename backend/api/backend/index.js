const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const telegramRouter = require('./api/telegram');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api/telegram', telegramRouter);

app.get('/', (req, res) => {
  res.send('Furcifer Tap-to-Earn Bot is running!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
