import axios from 'axios'

//default
const API_URL = '/api/users/'

//Register user
const registerUser = async (userData) => {
    const response = await axios.post(API_URL, userData)

    if(response.data)   {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response
}

//Logout User
const logout = () => {
    localStorage.removeItem('user')
}

//wrapping as authService
const authService = {
    registerUser,
    logout
}


export default authService