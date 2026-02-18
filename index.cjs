const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Your existing book list code starts below:
app.get('/api/status', (req, res) => {
  res.json({ 
    message: "Success! The Brain is Online. 🚀",
    books: [
      { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
      { id: 2, title: "1984", author: "George Orwell" },
      { id: 3, title: "The Hobbit", author: "J.R.R. Tolkien" },
      { id: 4, title: "Brave New World", author: "Aldous Huxley" },
      { id: 5, title: "Fahrenheit 451", author: "Ray Bradbury" }
    ]
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});