// const express = require('express')
// const mongoose = require('mongoose')
// const routes = require('./routes/index')
import express from 'express';
import mongoose from 'mongoose';
import routes from './routes/index.js';

const app = express();
const port = process.env.port || 3000;

mongoose.connect(process.env.MONGO_URI, {
	useNewUrlPasrser: true,
	useUnifiedTopology: true
})
	.then(() => {
		console.log('connected to MongoDB');
	})
	.catch(err => {
		console.log('error connecting to MongoDB', err);
	})

app.use(express.json());

app.use('/', routes);

app.listen(port, () => {
	console.log(`server running at port http://localhost:${port}`);
});