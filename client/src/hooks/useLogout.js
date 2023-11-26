import { useAuthContext } from './useAuthContext'

export const useLogout = () => {
    const { dispatch } = useAuthContext()

    const Logout = () => {
        // REMOVE USER FROM localStorage()
        localStorage.removeItem('user')

        // dispatch() LOGOUT ACTION
        dispatch({type: 'LOGOUT'})
    }

    return { Logout }
}