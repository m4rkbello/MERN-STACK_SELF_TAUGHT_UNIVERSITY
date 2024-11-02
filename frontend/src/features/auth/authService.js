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

//wrapping as authService
const authService = {
    registerUser
}


export default authService