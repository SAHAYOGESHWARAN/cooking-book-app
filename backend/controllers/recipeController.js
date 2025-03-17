
const Recipe = require('../models/recipeModel');

// Get all recipes
exports.getAllRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.find();
        res.json(recipes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Add a new recipe
exports.addRecipe = async (req, res) => {
    const recipe = new Recipe(req.body);
    try {
        const savedRecipe = await recipe.save();
        res.status(201).json(savedRecipe);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};