const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const { errors } = require('celebrate');
const cors = require('cors');

const auth = require('./middlewares/auth');
const { validateAuthData, validateUser } = require('./middlewares/validation-joi');
const centralHandleErr = require('./middlewares/central-handle-err');

const { login, createUser } = require('./controllers/users');
const logout = require('./controllers/logout');
const notFound = require('./controllers/not-found');

const users = require('./routes/users');
const cards = require('./routes/cards');

const {
  limiter,
  PORT,
  DB_URL,
  corsOptions,
} = require('./utils/constants');

const app = express();

mongoose.connect(DB_URL, {
  useNewUrlParser: true,
});

app.use(bodyParser.json());
app.use(cookieParser());
app.use(helmet());
app.use(limiter);
app.use(cors(corsOptions));

app.post('/signin', validateAuthData, login);
app.post('/signup', validateUser, createUser);

app.use(auth);
app.post('/logout', logout);
app.use('/users', users);
app.use('/cards', cards);
app.use('*', notFound);

app.use(errors());
app.use(centralHandleErr);

app.listen(PORT);
