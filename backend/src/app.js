const express = require('express');
const logger = require('morgan');
const cors = require('cors');
require('dotenv').config();

const authRouter = require('./routes/api/auth');
const booksRouter = require('./routes/api/books');

const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRouter);
app.use('/api/library', booksRouter);

app.use((req, res, next) => {
  res.status(404).json({ status: 'failed', code: 404, message: 'Not found' });
});

app.use((err, req, res, next) => {
  const { status = 500, message } = err;

  res.status(status).json({ status: 'failed', code: status, message });
});

module.exports = app;
