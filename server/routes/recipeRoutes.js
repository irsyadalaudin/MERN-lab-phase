import express from 'express';
import { Router } from 'express';
import Recipe from '../models/Recipe.js';

export const routes = Router()

/* GET ALL RECIPES */
routes.get('/', async (req, res) => {
    try {
        const {ingredients} = req.body;
        const recipe = await Recipe.find();
        console.log('Recipes:', recipe);
        res.status(200).json({ recipe });
    } catch(err) {
        res.status(400).json({ err: 'error getting recipe' })
    }
});