import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Recipe from './components/Recipe'

const App = () => {
	return (
		<>
		<Navbar />
		<Routes>
			<Route path = '/' element={<Home />} />
			<Route path = '/recipe' element={<Recipe />} />
		</Routes>
		</>
	)
}

export default App