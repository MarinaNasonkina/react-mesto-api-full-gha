const NotFoundError = require('../errors/not-found-err');

module.exports = (req, res, next) => {
  next(new NotFoundError('Страница не найдена'));
};
