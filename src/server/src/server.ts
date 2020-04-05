import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(8000, err => {
  return console.log('Server is listening on port 8000');
});
