import express from 'express';


const app = express();
const PORT = process.env.PORT || 3001;

// Middleware

app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Hello from Express + TypeScript!');
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
