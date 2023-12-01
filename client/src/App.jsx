import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
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
import { useAuthContext } from './hooks/useAuthContext'
import { useLogout } from './hooks/useLogout'  // Import useLogout

const App = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const { user } = useAuthContext()
    const { Logout } = useLogout()  // Destructure Logout from useLogout

    const handleLogout = () => {
        Logout()  // Call the Logout function
        navigate('/')  // Navigate to the home page after logout
    }

    useEffect(() => {
        const isLoggedIn = !!user;
        const isLoginPage = location.pathname === '/login';
        const isRegisterPage = location.pathname === '/register';
    
        if (!isLoggedIn && !isLoginPage && !isRegisterPage) {
            navigate('/login');
        } else if (isLoggedIn && (isLoginPage || isRegisterPage)) {
            navigate('/');
        }
    }, [navigate, location.pathname, user]);
    

    // CHECK IF THE CURRENT PAGE IS '/login'
    const hideNavbar = location.pathname === '/login' || location.pathname === '/register'

    return (
        <>
            {/* Render Navbar berdasarkan status autentikasi */}
            {hideNavbar ? null : <Navbar user={user} onLogout={handleLogout} />}
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
