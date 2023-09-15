import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Recipe from './components/Recipe'
import ContactUs from './components/ContactUs'

const App = () => {
	return (
		<>
		<Navbar />
		<Routes>
			<Route path = '/' element={<Home />} />
			<Route path = '/recipe' element={<Recipe />} />
			<Route path = '/contact-us' element={<ContactUs />} />
		</Routes>
		</>
	)
}

export default App