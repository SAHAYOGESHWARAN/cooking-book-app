
const validateRecipe = (recipe) => {
    const { title, ingredients, instructions } = recipe;
    if (!title || !ingredients || !instructions) {
        return false;
    }
    return true;
};

module.exports = { validateRecipe };