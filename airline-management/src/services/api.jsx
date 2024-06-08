import axios from 'axios';

const API_URL = '/api';

export const fetchMessage = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching the message:', error);
    }
};
