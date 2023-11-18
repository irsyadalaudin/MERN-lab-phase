import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Recipe from './components/Recipe'
import ContactUs from './components/ContactUs'
import AboutUs from './components/AboutUs'
import Account from './components/Account'

const App = () => {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/' element={<Recipe />} />
				<Route path='/contact-us' element={<ContactUs />} />
				<Route path='/about-us' element={<AboutUs />} />
				<Route path='/account' element={<Account />} />
			</Routes>
		</>
	)
}

export default App