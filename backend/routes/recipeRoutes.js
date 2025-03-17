
const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', recipeController.getAllRecipes);
router.post('/', authMiddleware, recipeController.addRecipe);

module.exports = router;