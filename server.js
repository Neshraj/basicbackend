const express = require('express');
const cors = require('cors');
const app = express();
const port = 4000;

app.use(cors());

app.get('/data', (req, res) => {
  const page = req.query.page;
  let data = '';

  switch (page) {
    case 'home':
      data = 'HOME PAGE';
      break;
    case 'about':
      data = 'ABOUT';
      break;
    case 'contact':
      data = 'CONTACT';
      break;
    case 'products':
      data = 'PRODUCT';
      break;
    default:
      data = 'PAGE NOT FOUND';
  }

  res.json({ data });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
