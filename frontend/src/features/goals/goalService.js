import axios from 'axios'

const API_URL = '/api/goals/'

//Method - POST request - create new goal or add new goal
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

//Method - GET request - get all goals or fetch all goals
const getGoals = async (goalData, token) => {
    try {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        const response = await axios.get(API_URL, config);
        console.log('Response:', response);  // Log the response to see if it's successful
        return response.data;
    } catch (error) {
        console.error('Error posting goal:', error);
        throw error;  // Rethrow or handle error as needed
    }
}


//Method - DELETE request - get all goals or fetch all goals
const deleteGoal = async (goalId, token) => {
    try {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        const response = await axios.delete(API_URL + goalId, config);
        console.log('Response:', response);  // Log the response to see if it's successful
        return response.data;
    } catch (error) {
        console.error('Error posting goal:', error);
        throw error;  // Rethrow or handle error as needed
    }
}



const goalService = {
    createGoal,
    getGoals,
    deleteGoal,
}

export default goalService

