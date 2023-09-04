import axios from 'axios';
import { BASE_URL } from "../constants/constant";

export async function fetchToDoItems() {
  try {
    const response = await axios.get(`${BASE_URL}/todos`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function fetchToDoItemDetail(id: string) {
  try {
    const response = await axios.get(`${BASE_URL}/todos/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}
