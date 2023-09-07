import axios from 'axios';
import { BASE_URL } from "../constants/constant";

const ToDoApi = axios.create({
  baseURL: BASE_URL,
});

export async function getToDoItems() {
  try {
    const response = await ToDoApi.get(`/todos`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getToDoItemDetail(id: string) {
  try {
    const response = await ToDoApi.get(`/todos/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function updateToDoItem(id: string, Title: string, Description: string) {
  try {
    await ToDoApi.put(`/todos/${id}`, {
      title: Title,
      description: Description,
    });
  } catch (error) {
    throw error;
  }
}
