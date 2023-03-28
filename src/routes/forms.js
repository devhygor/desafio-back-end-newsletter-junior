const express = require('express');
const { check } = require('express-validator');
const formsController = require('../controllers/forms');
const router = express.Router();

router.post(
  '/',
  [
    check('name').notEmpty().withMessage('O nome é obrigatório'),
    check('email')
      .notEmpty()
      .withMessage('O e-mail é obrigatório')
      .isEmail()
      .withMessage('E-mail inválido'),
    check('cpf')
      .notEmpty()
      .withMessage('O CPF é obrigatório')
      .matches(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/)
      .withMessage('CPF inválido'),
    check('phone').notEmpty().withMessage('O telefone é obrigatório'),
  ],
  formsController.createForm
);

router.get('/', formsController.getForms);

module.exports = router;