import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Recipe from './components/Recipe'
import ContactUs from './components/ContactUs'
import AboutUs from './components/AboutUs'
import Account from './components/Account'
import Login from './pages/Login'
import Register from './pages/Register'
import { useEffect } from 'react'

const App = () => {
	const navigate = useNavigate()
	const location = useLocation()

	useEffect(() => {
		const isLoggedIn = localStorage.getItem('user')
		if (!isLoggedIn && location.pathname !== '/login' && location.pathname !== '/register') {
			// Redirect to login if not logged in and not on login/register page
			navigate('/login', { replace: true })
		}
	}, [navigate, location])

	// CHECK IF THE CURRENT PAGE IS '/login' OR '/register TO HIDE NAVBAR
	const hideNavbar = location.pathname === '/login' || location.pathname === '/register'


	return (
		<>
			{/* DI COMMENT DULU YANG DIBAWAH NI BIAR BISA NGEDIT YANG LAINNYA */}
			{hideNavbar ? null : <Navbar />}
			{/* <Navbar /> */}
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
				<Route
					path='/restricted'
					element={
						localStorage.getItem('isLoggedIn') ? (
							<Recipe />
						) : (
							// Redirect to login if not logged in
							<Navigate to='/login' replace />
						)
					}
				/>
				<Route path='/contact-us' element={<ContactUs />} />
				<Route path='/about-us' element={<AboutUs />} />
				<Route
					path='/account'
					element={
						localStorage.getItem('isLoggedIn') ? (
							<Account />
						) : (
							// Redirect to login if not logged in
							<Navigate to='/login' replace />
						)
					}
				/>
			</Routes>
		</>
	)
}

export default App