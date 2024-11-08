import axios from 'axios'

const API_URL = '/api/goals/'

//create new goal
const createGoal = async (goalData, token) => {
    try {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        const response = await axios.post(API_URL, goalData, config);
        console.log('Response:', response);  // Log the response to see if it's successful
        return response.data;
    } catch (error) {
        console.error('Error posting goal:', error);
        throw error;  // Rethrow or handle error as needed
    }
}


const goalService = {
    createGoal
}

export default goalService

