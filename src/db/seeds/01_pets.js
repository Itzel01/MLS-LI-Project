/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('pets').del()
  await knex('pets').insert([
    {id: 1, pet_name: 'Mia', pet_url:'./imgs/cat__01.jpeg', pet_species:'cat',is_friendly:false},
    {id: 2, pet_name: 'Nina', pet_url:'./imgs/cat_02.jpeg', pet_species:'cat',is_friendly:true},
    {id: 3, pet_name: 'Tiny', pet_url:'./imgs/cat_03.jpeg', pet_species:'cat',is_friendly:true}
  ]);
};
