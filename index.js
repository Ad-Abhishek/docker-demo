import express from 'express';
import connectDB from './db.js';

const app = express();

app.use(express.json());

connectDB();

app.use('/', (req, res) => {
  res.json({
    msg: 'HI',
  });
});

app.listen(8080, (req, res) => {
  console.log('Listening on PORT 8080');
});
