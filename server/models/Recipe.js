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
/*
Recipe.create([
    {
        idMeal: '1',
        meal: 'Nasi Goreng',
        mealThumb: 'https://example.com/nasi-goreng.jpg',
        ingredients: ['Nasi', 'Bawang merah', 'Bawang putih', 'Telur', 'Kecap', 'Minyak goreng'],
        cookingInstructions: '1. Tumis bawang merah dan bawang putih hingga harum. 2. Masukkan telur dan aduk rata. 3. Tambahkan nasi dan kecap, aduk hingga matang. 4. Sajikan.'
    },
    {
        idMeal: '2',
        meal: 'Sate Ayam',
        mealThumb: 'https://example.com/sate-ayam.jpg',
        ingredients: ['Daging ayam', 'Bumbu kacang', 'Bawang merah', 'Bawang putih', 'Kecap manis'],
        cookingInstructions: '1. Tusuk daging ayam dengan tusukan sate. 2. Panggang sate hingga matang. 3. Sajikan dengan bumbu kacang dan nasi.'
    },
    {
        idMeal: '3',
        meal: 'Rendang',
        mealThumb: 'https://example.com/rendang.jpg',
        ingredients: ['Daging sapi', 'Bumbu rendang', 'Santan', 'Serai', 'Daun jeruk'],
        cookingInstructions: '1. Tumis bumbu rendang hingga harum. 2. Tambahkan daging sapi dan santan. 3. Masak hingga daging empuk. 4. Sajikan dengan nasi.'
    },
    {
        idMeal: '4',
        meal: 'Gado-Gado',
        mealThumb: 'https://example.com/gado-gado.jpg',
        ingredients: ['Lontong', 'Sayuran segar', 'Tahu', 'Tempe', 'Telur', 'Bumbu kacang'],
        cookingInstructions: '1. Rebus sayuran dan telur. 2. Goreng tahu dan tempe. 3. Sajikan dengan lontong dan bumbu kacang.'
    },
    {
        idMeal: '5',
        meal: 'Mie Goreng',
        mealThumb: 'https://example.com/mie-goreng.jpg',
        ingredients: ['Mie', 'Bawang merah', 'Bawang putih', 'Sayuran', 'Telur', 'Kecap'],
        cookingInstructions: '1. Tumis bawang merah dan bawang putih hingga harum. 2. Tambahkan sayuran dan telur. 3. Masak mie dengan kecap. 4. Sajikan.'
    },
    {
        idMeal: '6',
        meal: 'Soto Ayam',
        mealThumb: 'https://example.com/soto-ayam.jpg',
        ingredients: ['Daging ayam', 'Bawang merah', 'Bawang putih', 'Kecap manis', 'Lontong'],
        cookingInstructions: '1. Rebus daging ayam hingga empuk. 2. Tumis bawang merah dan bawang putih. 3. Sajikan dengan lontong dan kecap.'
    },
    {
        idMeal: '7',
        meal: 'Ayam Bakar',
        mealThumb: 'https://example.com/ayam-bakar.jpg',
        ingredients: ['Daging ayam', 'Bumbu bakar', 'Santan', 'Lengkuas', 'Serai'],
        cookingInstructions: '1. Marinasi daging ayam dengan bumbu bakar. 2. Bakar ayam hingga matang. 3. Sajikan dengan nasi.'
    },
    {
        idMeal: '8',
        meal: 'Nasi Padang',
        mealThumb: 'https://example.com/nasi-padang.jpg',
        ingredients: ['Nasi', 'Rendang', 'Sambal', 'Kerupuk', 'Sayuran'],
        cookingInstructions: '1. Sajikan nasi dengan rendang, sambal, kerupuk, dan sayuran.'
    },
    {
        idMeal: '9',
        meal: 'Pecel Lele',
        mealThumb: 'https://example.com/pecel-lele.jpg',
        ingredients: ['Lele', 'Bumbu pecel', 'Lalapan', 'Sambal'],
        cookingInstructions: '1. Goreng lele hingga krispi. 2. Sajikan dengan bumbu pecel, lalapan, dan sambal.'
    },
    {
        idMeal: '10',
        meal: 'Martabak',
        mealThumb: 'https://example.com/martabak.jpg',
        ingredients: ['Daging sapi', 'Telur', 'Bawang merah', 'Bawang putih', 'Tepung', 'Minyak goreng'],
        cookingInstructions: '1. Tumis daging sapi dengan bawang merah dan bawang putih. 2. Buat adonan martabak dan goreng hingga kecoklatan. 3. Sajikan.'
    }
])
    .then(doc => {
        console.log('all Recipes are created', doc)
    })
    .catch(err => {
        console.log('error while creating recipe', err)
    })
*/