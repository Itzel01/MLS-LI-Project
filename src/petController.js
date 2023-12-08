const Pet = require('./Pets');

const getAllPets = async (req, res) => {
  const pets = await Pet.getAllPets();
  res.json(pets).status(200);
}

const addPet = async (req, res) => {
  const addedPet = await Pet.addAPet(req.body);
  res.json(addedPet).status(200);
}

const deletePet = (req, res) => {
  const {id} = req.params;
  Pet.removeAPet(Number(id));
  res.json({msg:"deleted pet"});
}
module.exports = {
  getAllPets,
  addPet,
  deletePet
}