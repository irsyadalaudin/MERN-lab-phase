import dotenv from 'dotenv'
dotenv.config({ path: './config/.env' })

import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import path from 'path'
import userRoutes from './routes/userRoutes.js'
import { userAuth } from './middlewares/userAuth.js'
import { routes } from './routes/recipeRoutes.js'

const app = express()

// MIDDLEWARE SETUP FOR PARSING JSON REQUESTS AND ENABLING CORS
app.use(express.json())
app.use(cors())

// ROUTES
app.use('/', routes)
app.use('/user', userRoutes)
app.use('/user', userAuth)


// SERVE THE REACT APP'S MAIN HTML FILE FOR ALL ROUTES
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
})

// MONGODB DATABASE CONNECTION
const port = process.env.PORT || 3000

mongoose.connect(process.env.MONGO_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true
})
	.then(() => {
		console.log('connected to MongoDB')
	})
	.catch(err => {
		console.log('error connecting to MongoDB', err)
	})

// START THE SERVER AND LOG THE PORT
app.listen(port, () => {
	console.log(`server running at port http://localhost:${port}`)
})