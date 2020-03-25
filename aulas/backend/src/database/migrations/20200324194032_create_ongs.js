exports.up = function(knex) {
  return knex.schema.createTable('ongs', function (table){
      table.string('id').primary();
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.string('whatsapp').notNullable();
      table.string('city').notNullable();
      table.string('uf', 2).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('ongs');
};

/**
 * up: responsável pela criação da tabela, o que vai acontecer quando a migration for executada
 * down: se der algum problema e precisar voltar atrás, quando é necessário desfazer o up
 */
