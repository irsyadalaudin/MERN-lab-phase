import Recipe from '../models/Recipe.js';

const getRecipe = async (req, res) => {
    try {
        const food = await Recipe.find();
        res.json(food);
    } catch(err) {
        res.json({message: err})
    }
}

// module.exports = {getRecipe}
export default {getRecipe}