import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello, World using Router!');
});

router.get('/submit', (req, res) => {
  res.send('Form submitted using Router!');
});

export default router;
