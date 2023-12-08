const knex = require('./db/config');

const getAllPets = async () => {
  return knex
    .select()
    .from('pets');
};

const addAPet = async (petInfo) => {
  return knex('pets')
  .returning("*")
  .insert(petInfo);
}

const removeAPet = async (id) => {
  return knex('pets')
  .where('id',id)
  .del()
}

module.exports = {
  getAllPets,
  addAPet,
  removeAPet
}