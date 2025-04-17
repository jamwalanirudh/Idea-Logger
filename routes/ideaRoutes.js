const express = require('express');
const router = express.Router();
const { createIdea, getIdeas, deleteItem } = require('../controllers/ideaController');

router.post('/', createIdea);
router.get('/', getIdeas);
router.delete('/:id',deleteItem)
module.exports = router;