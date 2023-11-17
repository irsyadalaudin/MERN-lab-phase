import mongoose from 'mongoose'

const recipeSchema = new mongoose.Schema({
    meal: {type: String, required: true},
    mealThumb: {type: String},
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
/*
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
    },
    {
        idMeal: "11",
        meal: "Rice Congee (Porridge)",
        mealThumb: "https://i.postimg.cc/L89GCJWk/11-Bubur.jpg",
        ingredients: ["Rice", "Chicken broth", "Ginger", "Green onions", "Soy sauce"],
        cookingInstructions: "1. Cook rice with chicken broth until it becomes a porridge-like consistency. 2. Add ginger, green onions, and soy sauce. 3. Serve hot."
    },
    {
        idMeal: "12",
        meal: "Nasi Uduk",
        mealThumb: "https://i.postimg.cc/dQn2RD8c/12-Nasi-Uduk.jpg",
        ingredients: ["Coconut rice", "Fried shallots", "Fried anchovies", "Peanut sauce", "Egg"],
        cookingInstructions: "1. Cook coconut rice. 2. Serve with fried shallots, fried anchovies, peanut sauce, and a boiled egg."
    },
    {
        idMeal: "13",
        meal: "Soto Betawi",
        mealThumb: "https://i.postimg.cc/L8PgWsZX/13-Soto-Betawi.jpg",
        ingredients: ["Beef", "Coconut milk", "Potatoes", "Tomatoes", "Candlenuts"],
        cookingInstructions: "1. Boil beef with coconut milk until tender. 2. Add potatoes, tomatoes, and candlenuts. 3. Serve with rice."
    },
    {
        idMeal: "14",
        meal: "Fried Banana",
        mealThumb: "https://i.postimg.cc/FFJfzRDx/14-Pisang-Goreng.jpg",
        ingredients: ["Bananas", "Flour", "Sugar", "Vanilla extract", "Oil for frying"],
        cookingInstructions: "1. Coat banana slices in a batter made of flour, sugar, and vanilla extract. 2. Fry until golden brown. 3. Serve as a snack or dessert."
    },
    {
        idMeal: "15",
        meal: "Sayur Asem",
        mealThumb: "https://i.postimg.cc/gksG2bFD/15-Sayur-Asem.jpg",
        ingredients: ["Tamarind", "Corn", "Chayote", "Long beans", "Pumpkin"],
        cookingInstructions: "1. Make a tamarind-based broth. 2. Add corn, chayote, long beans, and pumpkin. 3. Serve with rice."
    },
    {
        idMeal: "16",
        meal: "Rujak",
        mealThumb: "https://i.postimg.cc/bYL5Gyrs/16-Rujak.jpg",
        ingredients: ["Pineapple", "Cucumber", "Jicama", "Tamarind sauce", "Chili"],
        cookingInstructions: "1. Mix sliced pineapple, cucumber, and jicama. 2. Drizzle with tamarind sauce and sprinkle with chili. 3. Enjoy this refreshing fruit salad."
    },
    {
        idMeal: "17",
        meal: "Pempek",
        mealThumb: "https://i.postimg.cc/bNW3bshN/17-Pempek.jpg",
        ingredients: ["Tapioca starch", "Fish", "Egg", "Cucumber", "Vinegar sauce"],
        cookingInstructions: "1. Mix tapioca starch and fish to make a dough. 2. Shape into patties and boil or fry. 3. Serve with egg, cucumber, and vinegar sauce."
    },
    {
        idMeal: "18",
        meal: "Lontong Cap Go Meh",
        mealThumb: "https://i.postimg.cc/pLvkk3pg/18-Lontong-Cap-gomeh.jpg",
        ingredients: ["Lontong", "Bamboo shoots", "Shrimp", "Chicken", "Sweet soy sauce"],
        cookingInstructions: "1. Cook lontong. 2. Sauté bamboo shoots, shrimp, and chicken. 3. Mix with lontong and add sweet soy sauce. 4. Serve hot."
    },
    {
        idMeal: "19",
        meal: "Bakso",
        mealThumb: "https://i.postimg.cc/DwD073LN/19-bakso.jpg",
        ingredients: ["Meatball", "Rice noodles", "Bean sprouts", "Fried shallots", "Beef broth"],
        cookingInstructions: "1. Boil meatballs. 2. Cook rice noodles and bean sprouts. 3. Serve with fried shallots and hot beef broth."
    },
    {
        idMeal: "20",
        meal: "Fish Pepes",
        mealThumb: "https://i.postimg.cc/rFZF92np/20-Pepes-Ikan.jpg",
        ingredients: ["Fish", "Banana leaves", "Lime leaves", "Galangal", "Chili paste"],
        cookingInstructions: "1. Wrap fish in banana leaves with lime leaves, galangal, and chili paste. 2. Steam until cooked. 3. Unwrap and serve."
    },
    {
        idMeal: "21",
        meal: "Wrapped Satay",
        mealThumb: "https://i.postimg.cc/fbnsHzxM/21-Sate-Lilit.jpg",
        ingredients: ["Fish", "Coconut", "Lime leaves", "Shallots", "Turmeric"],
        cookingInstructions: "1. Mix fish with grated coconut, lime leaves, shallots, and turmeric. 2. Skewer and grill until cooked. 3. Serve with rice."
    },
    {
        idMeal: "22",
        meal: "Mix Ice",
        mealThumb: "https://i.postimg.cc/Y2yJn2HT/22-Es-Campur.jpg",
        ingredients: ["Shaved ice", "Condensed milk", "Red beans", "Grass jelly", "Jackfruit"],
        cookingInstructions: "1. Arrange shaved ice in a bowl. 2. Add condensed milk, red beans, grass jelly, and jackfruit. 3. Enjoy this Indonesian mixed ice dessert."
    },
    {
        idMeal: "23",
        meal: "Sop Buntut",
        mealThumb: "https://i.postimg.cc/7LmB5XPj/23-Sop-Buntut.jpg",
        ingredients: ["Oxtail", "Carrots", "Potatoes", "Tomatoes", "Celery"],
        cookingInstructions: "1. Boil oxtail until tender. 2. Add carrots, potatoes, tomatoes, and celery. 3. Serve the oxtail soup with rice."
    },
    {
        idMeal: "24",
        meal: "Black Sticky Porridge",
        mealThumb: "https://i.postimg.cc/7Y3jx37r/24-Bubur-Ketan-Hitam.jpg",
        ingredients: ["Black glutinous rice", "Coconut milk", "Palm sugar", "Pandanus leaves", "Salt"],
        cookingInstructions: "1. Cook black glutinous rice with coconut milk, pandanus leaves, and a pinch of salt. 2. Sweeten with palm sugar. 3. Serve warm as a dessert."
    },
    {
        idMeal: "25",
        meal: "Ronde",
        mealThumb: "https://i.postimg.cc/Xqw1YWrk/25-Ronde.jpg",
        ingredients: ["Glutinous rice balls", "Peanuts", "Ginger", "Palm sugar", "Coconut milk"],
        cookingInstructions: "1. Boil glutinous rice balls. 2. Mix with peanuts, ginger, palm sugar, and coconut milk. 3. Serve this warm Indonesian dessert soup."
    },
    {
        idMeal: "26",
        meal: "Green Banana Ice",
        mealThumb: "https://i.postimg.cc/c40XBVKP/26-Pisang-Ijo.jpg",
        ingredients: ["Bananas", "Rice flour", "Pandan leaves", "Coconut milk", "Palm sugar"],
        cookingInstructions: "1. Coat bananas in green rice flour batter made with pandan leaves. 2. Steam until cooked. 3. Serve with coconut milk and palm sugar."
    },
    {
        idMeal: "27",
        meal: "Lapis Legit",
        mealThumb: "https://i.postimg.cc/zD0R4Mts/27-Lapis-Legit.jpg",
        ingredients: ["Butter", "Eggs", "Flour", "Condensed milk", "Spices"],
        cookingInstructions: "1. Layer buttery cake batter with condensed milk and spices. 2. Bake until golden brown. 3. Enjoy this rich, layered cake."
    },
    {
        idMeal: "28",
        meal: "Taichan Satay",
        mealThumb: "https://i.postimg.cc/KvC42ynH/28-Sate-Taichan.jpg",
        ingredients: ["Chicken skewers", "Chili", "Lime", "Sweet soy sauce", "Tomatoes"],
        cookingInstructions: "1. Skewer chicken and grill until cooked. 2. Serve with a spicy mixture of chopped chili, lime, sweet soy sauce, and tomatoes."
    },
    {
        idMeal: "29",
        meal: "Klepon",
        mealThumb: "https://i.postimg.cc/4xbGSCwt/29-Klepon.jpg",
        ingredients: ["Glutinous rice flour", "Palm sugar", "Coconut", "Pandan leaves", "Salt"],
        cookingInstructions: "1. Mix glutinous rice flour with water and salt. 2. Wrap palm sugar in the mixture and boil until cooked. 3. Coat with grated coconut. 4. Serve as a sweet snack."
    },
    {
        idMeal: "30",
        meal: "Ketoprak",
        mealThumb: "https://i.postimg.cc/j5yBLP9f/30-Ketropak.jpg",
        ingredients: ["Rice cake", "Bean sprouts", "Cucumber", "Fried tofu", "Peanut sauce"],
        cookingInstructions: "1. Arrange rice cake, bean sprouts, cucumber, and fried tofu on a plate. 2. Pour peanut sauce over the top. 3. Enjoy this flavorful street food dish."
    }
])
    .then(doc => {
        console.log('all Recipes are created', doc)
    })
    .catch(err => {
        console.log('error while creating recipe', err)
    })
*/