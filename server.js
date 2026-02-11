const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Simple in-memory database
const accounts = {
  "ACC001": { name: "John Doe", balance: 5000 },
  "ACC002": { name: "Jane Smith", balance: 3000 }
};

app.get('/health', (req, res) => {
  res.json({ status: 'healthy' });
});

app.get('/api/account/:id', (req, res) => {
  const account = accounts[req.params.id];
  if (account) {
    res.json(account);
  } else {
    res.status(404).json({ error: 'Account not found' });
  }
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`SA Bank API running on port ${PORT}`);
  });
}

module.exports = app;