import { useState } from 'react'
import { useAuthContext } from './useAuthContext.js'

export const useLogin = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const { dispatch } = useAuthContext()

    const login = async (identifier, password, navigate) => {
        setIsLoading(true)
        setError(null)

        try {
            // const response = await fetch('http://localhost:4000/user/login', {
            const response = await fetch('https://mern-backend-us5i.onrender.com/user/login', {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify({ identifier, password })
            });

            const json = await response.json()

            if (!response.ok) {
                setIsLoading(false)
                setError(json.message)
                navigate('/login')
            }

            if (response.ok && json.token) {
                // SAVE THE USER TO LOCAL STORAGE
                localStorage.setItem('user', JSON.stringify(json))

                // UPDATE THE AUTH CONTEXT
                dispatch({ type: 'LOGIN', payload: json })
                setIsLoading(false);

                // Navigate to home only if token is present
                navigate('/');
            } else {
                // Handle the case where token is not present
                setIsLoading(false)
            }
        } catch (error) {
            setIsLoading(false)
            setError('An error occurred during login.')
        }
    };

    return { login, isLoading, error }
};

export default useLogin
