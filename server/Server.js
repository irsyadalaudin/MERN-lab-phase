import dotenv from 'dotenv'
dotenv.config({ path: './config/.env' })

import express from 'express'
import mongoose from 'mongoose'
import { routes } from './routes/recipeRoutes.js'
import cors from 'cors'
import userRoutes from './routes/userRoutes.js'
import path from 'path'

const app = express()

app.use(express.json())
app.use(cors())

// ROUTES
app.use('/', routes)
app.use('/user', userRoutes)

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


app.listen(port, () => {
	console.log(`server running at port http://localhost:${port}`)
})