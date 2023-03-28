exports.up = function (knex) {
    return knex.schema.createTable('forms_answers', function (table) {
        table.increments('id').primary();
        table.text('name').notNullable();
        table.text('email').notNullable().unique();
        table.text('cpf').notNullable();
        table.text('phone').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('forms_answers');
};