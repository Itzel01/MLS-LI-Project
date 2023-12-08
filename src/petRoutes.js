const express = require('express');
const router = express.Router();
const petController = require('./petController');

router.get('/pets', petController.getAllPets);
router.post('/pets', petController.addPet);
router.delete('/pets/:id', petController.deletePet);

module.exports = router;
