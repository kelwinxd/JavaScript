import express from 'express';
const router = express.Router();

// Rota principal
router.get('/', (req, res) => {
  res.sendFile('index.html', { root: 'views' });
});

export { router };
