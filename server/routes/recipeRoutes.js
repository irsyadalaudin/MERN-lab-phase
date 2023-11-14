import express from 'express';
import { Router } from 'express';
import Recipe from '../models/Recipe.js';

export const routes = Router()

/* GET ALL RECIPES */
routes.get('/', async (req, res) => {
    // const { ingredients } = req.query;
    try {
        // const joinedIngredients = ingredients.split(',').map(encodeURIComponent).join(',');
        // const response = await axios.get(`http://localhost:4000/?ingredients=${encodeURIComponent(joinedIngredients)}`)
        const {ingredients} = req.body;
        const recipe = await Recipe.find();
        console.log('Recipes:', recipe);
        res.status(200).json({ recipe });
        // res.json(response.data);
    } catch(err) {
        res.status(400).json({ err: 'error getting recipe' })
    }
});