import express from 'express';
import axios from 'axios';

const router = express.Router();

router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log(username, password);
    const chatEngineResponse = await axios.get(
      'https://api.chatengine.io/users/me',
      {
        headers: {
          'Project-ID': 'c6105a57-6109-425e-8d6d-fb0924c4f209',
          'User-Name': username,
          'User-Secret': password,
        },
      }
    );

    res.status(200).json({ response: chatEngineResponse.data });
  } catch (error) {
    console.error('error', error);
    res.status(500).json({ error: error.message });
  }
});

router.post('/signup', async (req, res) => {
  try {
    const { username, password } = req.body;

    const chatEngineResponse = await axios.post(
      'https://api.chatengine.io/users/',
      {
        username: username,
        secret: password,
      },
      {
        headers: { 'Private-Key': process.env.PRIVATE_KEY },
      }
    );

    res.status(200).json({ response: chatEngineResponse.data });
  } catch (error) {
    console.error('error', error.message);
    res.status(500).json({ error: error.message });
  }
});

export default router;
