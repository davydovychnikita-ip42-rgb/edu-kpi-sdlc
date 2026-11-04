const { AppError } = require('../shared/errors/AppError');

function errorHandler(err, req, res, next) {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: 'error',
      code: err.errorCode,
      message: err.message,
    });
  }

  if (err.code === '23505') {
    return res.status(409).json({
      status: 'error',
      code: 'DUPLICATE_ENTRY',
      message: 'Запис із такими унікальними даними вже існує',
    });
  }

  if (err.code === '23503') {
    return res.status(400).json({
      status: 'error',
      code: 'FOREIGN_KEY_VIOLATION',
      message: 'Посилання на неіснуючий пов’язаний ресурс (категорію або користувача)',
    });
  }

  if (err.code === '22P02') {
    return res.status(400).json({
      status: 'error',
      code: 'INVALID_UUID_FORMAT',
      message: 'Некоректний формат ідентифікатора (очікується UUID)',
    });
  }

  if (err.code === '23514') {
    return res.status(400).json({
      status: 'error',
      code: 'CHECK_CONSTRAINT_VIOLATION',
      message: 'Значення виходить за допустимі межі (ціна або кількість не можуть бути від’ємними)',
    });
  }

  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    return res.status(400).json({
      status: 'error',
      code: 'INVALID_JSON',
      message: 'Некоректний формат JSON у тілі запиту',
    });
  }

  console.error('Unhandled Server Error:', err);
  return res.status(500).json({
    status: 'error',
    code: 'INTERNAL_SERVER_ERROR',
    message: 'Внутрішня помилка сервера',
  });
}

module.exports = errorHandler;