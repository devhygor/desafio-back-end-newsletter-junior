const pool = require('../database');
const { validationResult } = require('express-validator');

const createForm = async (req, res) => {
    // Validando os dados da requisição
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }

    // Verificando se o e-mail já foi cadastrado
    const { email } = req.body;
    const existingForm = await pool.query(
        'SELECT * FROM forms_answers WHERE email = $1',
        [email]
    );
    // Se ja existir um mesmo email cadastrado, exibe uma mensagem informando que o E-mail já é cadastrado
    if (existingForm.rowCount > 0) {
        return res.status(409).json({ message: 'E-mail já cadastrado' });
    }

    // Salvando a inscrição no banco de dados
    const { name, cpf, phone } = req.body;
    const createdAt = new Date();
    const newForm = await pool.query(
        'INSERT INTO forms_answers (name, email, cpf, phone, created_at) VALUES ($1, $2, $3, $4, $5) RETURNING *',
        [name, email, cpf, phone, createdAt]
    );

    res.status(201).json(newForm.rows[0]);
};

const getForms = async (req, res) => {
    // Buscando as inscrições no banco de dados
    const { startDate, endDate } = req.query;
    const forms = await pool.query(
        'SELECT * FROM forms_answers WHERE created_at BETWEEN $1 AND $2',
        [startDate, endDate]
    );

    res.json(forms.rows);
};

module.exports = { createForm, getForms };
