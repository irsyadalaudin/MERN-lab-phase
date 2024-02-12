import { useState } from 'react'
import { useAuthContext } from './useAuthContext.js'

export const useRegister = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const { dispatch } = useAuthContext()
    

    const register = async (name, username, email, password) => {
        setIsLoading(true)
        setError(null)

        try {
            // AFTER DEPLOYING THE BACKEND, THE LOCALHOST FETCH IS REPLACED WITH THE ACTIVE BACKEND LINK
            // const response = await fetch('http://localhost:4000/user/register', {
            const response = await fetch('https://mern-backend-us5i.onrender.com/user/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, username, email, password })
            })
            const json = await response.json()

            if (!response.ok) {
                setIsLoading(false)
                setError(json.error)
            }

            if (response.ok) {
            // SAVE THE USER TO LOCAL STORAGE
            localStorage.setItem('user', JSON.stringify(json))

            // UPDATE THE AUTH CONTEXT
            dispatch({ type: 'REGISTER', payload: json })    // REGISTER MUST BE WRITTEN HERE SO THAT IT DOES NOT IMMEDIATELY LOG IN
            setIsLoading(false)
        
            } else {
                setIsLoading(false)
                setError('username or password is not strong ')
            }

        } catch (error) {
            setIsLoading(false)
            setError('An error occurred during registration.')
        }
    }

    return { register, isLoading, error }
}

export default useRegister
