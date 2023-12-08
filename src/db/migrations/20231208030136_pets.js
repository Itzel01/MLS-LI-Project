/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('pets', table => {
    table.increments();
    table.string('pet_name');
    table.string('pet_url');
    table.string('pet_species');
    table.boolean('is_friendly').defaultTo(false);
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('pets');
};
