const { body, validationResult } = require('express-validator');

const validateUser = [
  body('firstname').isAlpha(),
  body('lastname').isAlpha(),
  body('password').isLength({ min: 5 }),
  body('email').isEmail(),
]
module.exports = validateUser