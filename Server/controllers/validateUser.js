const { body, validationResult } = require('express-validator');

const validateUser = [
  body('name').isAlpha(),
  body('password').isLength({ min: 5 }),
  body('email').isEmail(),
]
module.exports = validateUser