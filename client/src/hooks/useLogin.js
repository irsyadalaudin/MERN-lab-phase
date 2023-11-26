import { useState } from 'react'
import { useAuthContext } from './useAuthContext.js'

export const useLogin = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()
    

    const login = async (identifier, password) => {
        setIsLoading(true)
        setError(null)

            const response = await fetch('http://localhost:4000/user/login', {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify({ identifier, password })
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
    return { login, isLoading, error }
}

export default useLogin
