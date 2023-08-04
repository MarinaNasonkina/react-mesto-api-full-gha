module.exports = (req, res, next) => {
  try {
    res
      .clearCookie('token', {
        httpOnly: true,
        sameSite: true,
      })
      .send({ message: 'Выход прошел успешно' });
  } catch (err) {
    next(err);
  }
};
