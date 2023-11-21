import dotenv from 'dotenv';
dotenv.config({ path: './config/.env' });

import express from 'express';
import mongoose from 'mongoose';
import { routes } from './routes/recipeRoutes.js';
import cors from 'cors';
import loginRoutes from './routes/loginRoutes.js';

const app = express();

// MONGODB DATABASE CONNECTION
const port = process.env.port || 3000;

mongoose.connect(process.env.MONGO_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true
})
	.then(() => {
		console.log('connected to MongoDB');
	})
	.catch(err => {
		console.log('error connecting to MongoDB', err);
	})

app.use(express.json());
app.use(cors());

// ROUTES
app.use('/', routes);
app.use(loginRoutes);

app.listen(port, () => {
	console.log(`server running at port http://localhost:${port}`);
});