import { useState } from 'react'
import { useAuthContext } from './useAuthContext.js'

export const useRegister = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()
    

    const register = async (name, username, email, password) => {
        setIsLoading(true)
        setError(null)

            const response = await fetch('http://localhost:4000/user/register', {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
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
            dispatch({ type: 'LOGIN', payload: json })
            setIsLoading(false)}
                
        // } catch (error) {
        //     setIsLoading(false)
        //     setError('An error occurred during registration.')
        
    }

    // return [register, isLoading, error]
    return { register, isLoading, error }
}

export default useRegister
