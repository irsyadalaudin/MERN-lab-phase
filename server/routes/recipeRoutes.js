import express from 'express';
import { Router } from 'express';
import Recipe from '../models/Recipe.js';

const routes = Router()

/* GET ALL RECIPES */
routes.get('/', async (req, res) => {
    try {
        const recipe = await Recipe.find();
        res.status(200).json({recipe});
    } catch(err) {
        res.status(400).json({message: 'error getting recipe'})
    }
});

/* POST NEW RECIPE */
routes.post('/recipe', async (req, res) => {
    const {meal, mealThumb, ingredients, cookingInstructions} = req.body;
    try {
        const newRecipe = new Recipe({meal, mealThumb, ingredients, cookingInstructions});
        await newRecipe.save();
        res.status(200).json({newRecipe});
    } catch(err) {
        res.status(400).json({message: 'error creating recipe'})
    }
});

/* PUT (update) A RECIPE BY ID */
routes.put('/recipe/:id', async (req, res) => {
    const id = req.params.id;
    const {meal, mealThumb, ingredients, cookingInstructions} = req.body;
    try {
        const updateRecipe = await Recipe.findByIdAndUpdate(id, {meal, mealThumb, ingredients, cookingInstructions}, {new: true});
        res.status(200).json(updateRecipe);
    } catch(err) {
        res.status(400).json({message: 'error updating recipe'})
    }
});

routes.delete('/recipe/:id', async (req, res) => {
    const id = req.params.id;
    const {meal, mealThumb, ingredients, cookingInstructions} = req.body;
    try {
        const deleteRecipe = await Recipe.findByIdAndDelete(id, {meal, mealThumb, ingredients, cookingInstructions}, {new: true});
        res.status(200).json(deleteRecipe);
    } catch(err) {
        res.status(400).json({message: 'error deleting recipe'})
    }
});