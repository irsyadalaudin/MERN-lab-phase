import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Recipe from './components/Recipe'
import ContactUs from './components/ContactUs'
import AboutUs from './components/AboutUs'
import Account from './components/Account'
import Login from './components/Login'
import Register from './components/Register'
import { useEffect } from 'react'

const App = () => {
	const navigate = useNavigate()
	const location = useLocation()

	useEffect(() => {
		const isLoggedIn = localStorage.getItem('isLoggedIn')
		if (!isLoggedIn) {
			navigate('/login')
		}
	}, [navigate]);

	// CHECK IF THE CURRENT PAGE IS '/login'
	const hideNavbar = location.pathname === '/login';


	return (
		<>
			{/* DI COMMENT DULU YANG DIBAWAH NI BIAR BISA NGEDIT YANG LAINNYA */}
			{hideNavbar ? null : <Navbar />}
			{/* <Navbar /> */}
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/' element={<Recipe />} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
				<Route path='/contact-us' element={<ContactUs />} />
				<Route path='/about-us' element={<AboutUs />} />
				<Route path='/account' element={<Account />} />
			</Routes>
		</>
	)
}

export default App