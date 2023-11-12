import mongoose from 'mongoose'

const recipeSchema = new mongoose.Schema({
    meal: {type: String, required: true},
    mealThumb: {type: Buffer},
    ingredients: {type: [String]},
    cookingInstructions: {type: String},
});

const Recipe = mongoose.model('Recipe', recipeSchema);
export default Recipe;
/*
Recipe.deleteMany({})
    .then(doc => {
        console.log('All documents deleted:', doc);
    })
    .catch(err => {
        console.error('Error deleting documents:', err);
})
*/

Recipe.create([
        {
        idMeal: "1",
        meal: "Fried Rice",
        mealThumb: "https://i.postimg.cc/pr3mcJ5z/1-Nasi-Goreng.jpg",
        ingredients: ["Rice", "Red onion", "Garlic", "Egg", "Soy sauce", "Cooking oil"],
        cookingInstructions: "1. Sauté red onion and garlic until fragrant. 2. Add egg and stir until well-mixed. 3. Add rice and soy sauce, stir until cooked. 4. Serve."
    },
    {
        idMeal: "2",
        meal: "Chicken Satay",
        mealThumb: "https://i.postimg.cc/8CwjgSr1/2-Sate-Ayam.jpg",
        ingredients: ["Chicken", "Peanut sauce", "Red onion", "Garlic", "Sweet soy sauce"],
        cookingInstructions: "1. Skewer chicken meat with satay sticks. 2. Grill satay until cooked. 3. Serve with peanut sauce and rice."
    },
    {
        idMeal: "3",
        meal: "Rendang",
        mealThumb: "https://i.postimg.cc/VNNb6vwS/3-Rendang.jpg",
        ingredients: ["Beef", "Rendang spices", "Coconut milk", "Lemongrass", "Kaffir lime leaves"],
        cookingInstructions: "1. Sauté rendang spices until fragrant. 2. Add beef and coconut milk. 3. Cook until the meat is tender. 4. Serve with rice."
    },
    {
        idMeal: "4",
        meal: "Gado-Gado",
        mealThumb: "https://i.postimg.cc/3rZ7LBmT/4-Gado-Gado.jpgJ",
        ingredients: ["Lontong", "Fresh vegetables", "Tofu", "Tempeh", "Egg", "Peanut sauce"],
        cookingInstructions: "1. Boil vegetables and eggs. 2. Fry tofu and tempeh. 3. Serve with lontong and peanut sauce."
    },
    {
        idMeal: "5",
        meal: "Fried Noodles",
        mealThumb: "https://i.postimg.cc/HxJk8F7M/5-Mie-Goreng.jpg",
        ingredients: ["Noodles", "Red onion", "Garlic", "Vegetables", "Egg", "Soy sauce"],
        cookingInstructions: "1. Sauté red onion and garlic until fragrant. 2. Add vegetables and egg. 3. Cook noodles with soy sauce. 4. Serve."
    },
    {
        idMeal: "6",
        meal: "Chicken Soto",
        mealThumb: "https://i.postimg.cc/65KBB8zn/6-Soto-Ayam.jpg",
        ingredients: ["Chicken meat", "Red onion", "Garlic", "Sweet soy sauce", "Lontong"],
        cookingInstructions: "1. Boil chicken meat until tender. 2. Sauté red onion and garlic. 3. Serve with lontong and sweet soy sauce."
    },
    {
        idMeal: "7",
        meal: "Grilled Chicken",
        mealThumb: "https://i.postimg.cc/N0936tpQ/7-Ayam-Bakar.jpg",
        ingredients: ["Chicken meat", "Grilling spices", "Coconut milk", "Galangal", "Lemongrass"],
        cookingInstructions: "1. Marinate chicken meat with grilling spices. 2. Grill chicken until cooked. 3. Serve with rice."
    },
    {
        idMeal: "8",
        meal: "Satay Padang",
        mealThumb: "https://i.postimg.cc/QdTCfF8z/8-Sate-Padang.jpg",
        ingredients: ["Beef or chicken slices, marinated in Padang-style spices", "Rendang sauce",  "Sambal (spicy chili sauce)", "Kerupuk (crackers)", "Sliced vegetables (cucumber, tomatoes, and shallots)"],
        cookingInstructions: "1. Marinate beef or chicken slices in Padang-style spices. 2. Skewer the marinated meat and grill until cooked. 3. Heat the rendang sauce. 4. Serve the satay with rendang sauce, sambal, kerupuk, and sliced vegetables."
    },
    {
        idMeal: "9",
        meal: "Catfish Pecel",
        mealThumb: "https://i.postimg.cc/CxTSLm0v/9-Pecel-Lele.jpg",
        ingredients: ["Catfish", "Pecel spices", "Fresh vegetables", "Sambal"],
        cookingInstructions: "1. Fry catfish until crispy. 2. Serve with pecel spices, fresh vegetables, and sambal."
    },
    {
        idMeal: "10",
        meal: "Martabak",
        mealThumb: "https://i.postimg.cc/7Y7bVCYW/10-Martabak.jpg",
        ingredients: ["Beef", "Egg", "Red onion", "Garlic", "Flour", "Cooking oil"],
        cookingInstructions: "1. Sauté beef with red onion and garlic. 2. Make martabak dough and fry until golden brown. 3. Serve."
    }
])
    .then(doc => {
        console.log('all Recipes are created', doc)
    })
    .catch(err => {
        console.log('error while creating recipe', err)
    })
