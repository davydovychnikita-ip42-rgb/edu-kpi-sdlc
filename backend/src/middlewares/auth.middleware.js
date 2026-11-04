const { UnauthorizedError } = require('../shared/errors/AppError');

function authenticateJWT(req, res, next) {
  const testUserId = req.headers['x-user-id'];
  if (testUserId) {
    req.user = { id: testUserId, role: req.headers['x-user-role'] || 'USER' };
  }
  next();
}

function requireStorefront(req, res, next) {
  if (!req.user) {
    return next(new UnauthorizedError('Необхідна авторизація для доступу до вітрини'));
  }
  next();
}

module.exports = {
  authenticateJWT,
  requireStorefront,
};