import { useSelector } from 'react-redux'

export  function useAuth () {
    const { email, id, token} = useSelector(state => state.user)
    console.log(email,id,token)
    return {
        isAuth:!!email,
        email,
        id,
        token
    }
}