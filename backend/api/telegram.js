const express = require('express');
const axios = require('axios');
const router = express.Router();

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;

router.post('/', async (req, res) => {
  const { message } = req.body;
  if (message) {
    const chatId = message.chat.id;
    const text = 'Hello from Furcifer Tap-to-Earn Bot!';

    await axios.post(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      chat_id: chatId,
      text: text,
    });

    res.status(200).send('Message sent');
  } else {
    res.status(400).send('No message in request body');
  }
});

module.exports = router;
