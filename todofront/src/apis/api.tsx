import axios from 'axios';
import { BASE_URL } from "../constants/constant";

export async function fetchToDoItems() {
    try {
        const response = await axios.get(`${BASE_URL}/todos`);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}
