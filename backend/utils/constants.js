const rateLimit = require('express-rate-limit');
require('dotenv').config();

const limiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 100,
});

const {
  NODE_ENV,
  JWT_SECRET,
  PORT = 5000,
  DB_URL = 'mongodb://127.0.0.1:27017/mestodb',
} = process.env;

const allowedCors = ['http://localhost:3000'];

const corsOptions = { origin: allowedCors, credentials: true };

// eslint-disable-next-line no-useless-escape
const regexLink = /https?:\/\/(www.)?[\w\-\.]+(ru|com|net)[\w\-\.~:\/?#\[\]@!;&'\(\)*\+,;=]*/;

const CREATED_CODE = 201;

const BAD_REQUEST_ERROR = 400;
const UNAUTHORIZED_ERROR = 401;
const FORBIDDEN_ERROR = 403;
const NOT_FOUND_ERROR = 404;
const CONFLICT_ERROR = 409;

const INTERNAL_SERVER_ERROR = 500;

module.exports = {
  limiter,
  NODE_ENV,
  JWT_SECRET,
  PORT,
  DB_URL,
  corsOptions,
  regexLink,
  CREATED_CODE,
  BAD_REQUEST_ERROR,
  UNAUTHORIZED_ERROR,
  FORBIDDEN_ERROR,
  NOT_FOUND_ERROR,
  CONFLICT_ERROR,
  INTERNAL_SERVER_ERROR,
};
