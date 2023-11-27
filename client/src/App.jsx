import { Link, useNavigate } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'

import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Recipe from './components/Recipe'
import ContactUs from './components/ContactUs'
import AboutUs from './components/AboutUs'
import Account from './components/Account'
import Login from './pages/Login'
import Register from './pages/Register'
import { useEffect, useState } from 'react'
import { useLogout } from './hooks/useLogout' 
import { useAuthContext } from './hooks/useAuthContext'

const App = () => {
    const [showNavbar, setShowNavbar] = useState(false)

    const { Logout } = useLogout()
    const { user } = useAuthContext()
    const navigate = useNavigate()

    const handleLogout = () => {
        Logout()
        navigate('/login')
    }

    useEffect(() => {
        setShowNavbar(!!user && window.location.pathname !== '/login')
    }, [user])

    return (
        <>  
            {showNavbar && (
                <>
                    {/* {user && <Navbar />} */}
                    {user && <Navbar user={user} onLogout={handleLogout} />}
                    {/* {user && (
                        <div className='flex justify-center bg-yellow-600 rounded-md gap-2 pl-1'>
                            <span className='text-black'>{user.username}</span>
                            <button onClick={handleLogout} className='bg-yellow-600 text-black rounded-md hover:cursor-pointer hover:bg-yellow-700 border-none'>Logout</button>
                        </div>
                    )} */}
                    {showNavbar && !user && (
                        <div>
                            <Link to='/login' className='text-neutral-100 no-underline'>Login</Link>
                        </div>
                    )}
                </>
            )}
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
